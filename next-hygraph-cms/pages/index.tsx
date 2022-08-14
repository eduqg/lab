import { gql } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link'
import client from '../apolloClient'

import type { NextPage } from 'next'

export interface IStream {
  title: string;
  description: {
    html: any;
    raw: any;
  };
  slug: string;
  coverImage: {
    url: string;
  }
}

interface IHome {
  streams: IStream[]
}

const Home: NextPage<IHome> = ({ streams }) => {
  return (
    <div>
      <Head>
        <title>Hygraph test</title>
        <meta name="description" content="Hygraph test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Learn Quick</h1>

      <ul>
        {streams.map((stream) => (
          <li key={stream.slug}>
            <Link href={`/streams/${stream.slug}`}>{stream.title}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        streams {
          title,
          slug,
          streamDate,
          coverImage {
            url
          }
          guestName,
          description {
            raw
          }
        }
      }
    `
  })

  const { streams } = data;

  return {
    props: {
      streams
    }
  }
}

export default Home
