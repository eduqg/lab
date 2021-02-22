import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IProduct {
  id: string;
  title: string;
}

interface ICategoryProps {
  products: IProduct[];
}

const Category: React.FC<ICategoryProps> = ({ products }) => {
  const router = useRouter();

  // Indica que a página estática está sendo gerada
  if(router.isFallback) {
    return <p>Carregando...</p>
  }
  
  return (
    <div>
      <section>
        <h1>Categoria</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

// Executa antes de getStaticProps (que utiliza informações do yarn build)
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3333/categories`);
  const categories = await response.json();

  const paths = categories.map(category => {
    return {
      params: { slug: category.id }
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

  const response = await fetch(`http://localhost:3333/products?category_id=${slug}`);
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 60,
  }

}

export default Category;