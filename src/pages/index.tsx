import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
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

  return (
    <div>
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
    </div>
  )
}

// Server side rendering: para que informações sejam carregadas junto com a página
// Informações também são usadas por crowlers
// As informações são acessadas como props
// Apenas para informações para motores de busca
// Fazer isso aumenta o TTFB -> time to first byte, tempo que o primeiro código fica disponível para o usuário 
export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProduts = await response.json();

  return {
    props: {
      recommendedProduts
    }
  }

}

export default Home;