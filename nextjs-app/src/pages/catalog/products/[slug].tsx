import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/lib/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';

interface IProductProps {
  product: Document;
}

// Lazy load de componente
const AddToCartModal = dynamic(() => import('@/components/AddToCartModal'),
  // ssr false, se o component depende de variável do browser
  // página sempre seja renderizada no lado do cliente
  { loading: () => <p>Carregando</p>, ssr: false }
);

const Product: React.FC<IProductProps> = ({ product }) => {
  const router = useRouter();
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false)

  const handleAddToCart = useCallback(() => {
    setIsAddToCartModalVisible(true)
  }, [])

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>Product {PrismicDOM.RichText.asText(product.data.title)}</h1>

      <img src={product.data.thumbnail.url} width="300" alt="Camiseta" />

      <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(product.data.description) }}></div>

      <p>Price: {product.data.price}</p>

      <button onClick={handleAddToCart}>Add to cart</button>

      {isAddToCartModalVisible && <AddToCartModal />}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Carrega a medida que usuários acessam pois o fallback está true
    paths: [],
    fallback: true
  }
};

export const getStaticProps: GetStaticProps<IProductProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});

  return {
    props: {
      product
    },
    revalidate: 10,
  }

}


export default Product;