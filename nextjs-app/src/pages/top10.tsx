import React from 'react';
import { GetStaticProps } from 'next';

interface IProduct {
  id: string;
  title: string;
}

interface ITop10Props {
  products: IProduct[]
}

const Top10: React.FC<ITop10Props> = ({ products }) => {
  return (
    <div>
      <h1>Top 10</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>

  );
}

// Static Site Generation
// Para coisas que não são dinamicas, não precisam ser atualizadas constantemente
// Se assemelha ao gatsby, para páginas que são muito difíceis de mudar
// Para ocasiões que não tem problema ser um conteudo mais desatualizado ao usuário
export const getStaticProps: GetStaticProps<ITop10Props> = async (context) => {
  // const response = await fetch('http://localhost:3333/products');
  // const products = await response.json();

  return {
    props: {
      products: []
    },
    // Tempo em segundos para ser atualizado os dados.
    // Se tiverem 1000 req dentro de 5 segundos, será a mesma informação
    // Após isso, se um usuário requisitar no segundo 6, novos dados serão carregados
    revalidate: 5
  }
}

export default Top10;