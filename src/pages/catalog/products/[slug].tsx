import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

// Lazy load de componente
const AddToCartModal = dynamic(() => import('../../../components/AddToCartModal'),
  // ssr false, se o component depende de variável do browser
  // página sempre seja renderizada no lado do cliente
  { loading: () => <p>Carregando</p>, ssr: false }
);

const Product: React.FC = () => {
  const router = useRouter();
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false)

  const handleAddToCart = useCallback(() => {
    setIsAddToCartModalVisible(true)
  }, [])

  return (
    <div>
      <h1>Product {router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to cart</button>

      {isAddToCartModalVisible && <AddToCartModal />}
    </div>
  )
}

export default Product;