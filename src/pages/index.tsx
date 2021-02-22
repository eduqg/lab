import SEO from '@/components/SEO';
import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProduts: IProduct[];
}

const Home: React.FC<IHomeProps> = ({ recommendedProduts }) => {
  // Client side fetching: para informações que não preciso no motor de busca para indexação
  // useEffect(() => {
  //   fetch('http://localhost:3333/recommended').then(response => {
  //     response.json().then(data => {
  //       setRecommendedProduts(data)
  //     })
  //   })
  // }, [])

  const handleSum = useCallback(async () => {
    // Dynamic import
    const math = (await import('../lib/math')).default;

    alert(math.sum(3, 4));
  }, []);

  return (
    <div>

      <SEO
        title="Your best e-commerce"
        image="boost.png"
        shouldExcludeTitleSuffix />

      <section>
        <Title>Hello World!</Title>

        <ul>
          {recommendedProduts.map((recommendedProduct) => (
            <li key={recommendedProduct.id}>
              {recommendedProduct.title}
            </li>
          ))}
        </ul>
      </section>

      <button type="button" onClick={handleSum}>Sum!</button>
    </div>
  )
}

// Server side rendering: para que informações sejam carregadas junto com a página
// Informações também são usadas por crowlers
// As informações são acessadas como props
// Apenas para informações para motores de busca
// Fazer isso aumenta o TTFB -> time to first byte, tempo que o primeiro código fica disponível para o usuário 
export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProduts = await response.json();

  return {
    props: {
      recommendedProduts
    }
  }

}

export default Home;