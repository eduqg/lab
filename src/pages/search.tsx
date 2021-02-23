import { useRouter } from 'next/router';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/lib/prismic';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface ISearchProps {
  searchResults: Document[];
}

const Search: React.FC<ISearchProps> = ({ searchResults }) => {
  const router = useRouter();
  const [search, setSearch] = useState('');



  const handleSearch = useCallback((e: FormEvent) => {
    e.preventDefault();

    router.push(`/search?q=${encodeURIComponent(search)}`);

    setSearch('');
  }, [search]);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {searchResults.map((product) => (
        <li key={product.id}>
          <Link href={`/catalog/products/${product.uid}`}>
            <a>
              {PrismicDOM.RichText.asText(product.data.title)}
            </a>
          </Link>
        </li>
      ))}

      {searchResults.length === 0 && (
        <h2>Não foram encontrados produtos</h2>
      )}
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<ISearchProps> = async (context) => {
  const { q } = context.query;

  if (!q) {
    return { props: { searchResults: [] } };
  }

  const searchResults = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    // my -> porque foi um campo que criei, não é padrão do prismic
    Prismic.Predicates.fulltext('my.product.title', String(q))
  ]);

  return {
    props: { searchResults: searchResults.results }
  }
}

export default Search;