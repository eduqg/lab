import { client } from '@/lib/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';


interface ICategoryProps {
  category: Document;
  products: Document[];
}

const Category: React.FC<ICategoryProps> = ({ products, category }) => {
  const router = useRouter();

  // Indica que a página estática está sendo gerada
  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <section>
        <h1>Categoria {PrismicDOM.RichText.asText(category.data.title)}</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/category/${product.uid}`}>
                <a>
                  {PrismicDOM.RichText.asText(product.data.title)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

// Executa antes de getStaticProps (que utiliza informações do yarn build)
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await client().query([
    Prismic.Predicates.at('document.type', 'category'),
  ])

  const paths = categories.results.map(category => {
    return {
      params: { slug: category.uid }
    }
  })

  return {
    paths,
    // Caso não tenha sido gerada a categoria na build
    // caso true, ele carrega a página no primeiro usuário
    // e salva de forma estática!
    fallback: true
  }
};

export const getStaticProps: GetStaticProps<ICategoryProps> = async (context) => {
  const { slug } = context.params;

  // a = ['asd','fgh'] -> String(a) -> "asd,fgh"
  const category = await client().getByUID('category', String(slug), {});

  const products = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.at('my.product.category', category.id)
  ])

  return {
    props: {
      category,
      products: products.results
    },
    revalidate: 60,
  }

}

export default Category;