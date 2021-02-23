import SEO from '@/components/SEO';
import Link from 'next/link';
import { client } from '@/lib/prismic';
import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom';

import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProduts: Document[];
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
              <Link href={`/catalog/products/${recommendedProduct.uid}`}>
                <a>
                  {PrismicDOM.RichText.asText(recommendedProduct.data.title)}
                </a>
              </Link>
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
  const recommendedProduts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ]);

  return {
    props: {
      recommendedProduts: recommendedProduts.results
    }
  }

}

export default Home;