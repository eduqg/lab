import { gql } from '@apollo/client';
import { GetStaticProps, GetStaticPaths } from 'next';

import client from '../../apolloClient';

import { IStream } from '..';
import { RichText } from '@graphcms/rich-text-react-renderer';

interface IStreamPage {
  stream: IStream
}

export default function StreamPage({ stream }: IStreamPage) {
  return (
    <div>
      <h1>{stream.title}</h1>
      <img
        src={stream.coverImage.url}
        alt={`${stream.title} cover imaga`}
      />

      <div dangerouslySetInnerHTML={{ __html: stream.description.html }} />

      <p>Utilizando @graphcms/rich-text-react-renderer</p>
      <RichText
        content={stream.description.raw}
        renderers={{
          h1: ({ children }) => <h1 style={{ color: 'blue' }}>{children}</h1>,
          p: ({ children }) => <p style={{ color: 'green' }}>{children}</p>,
          a: ({ children, href, openInNewTab }) => (
            <a
              href={href}
              target={openInNewTab ? '_blank' : '_self'}
              style={{ color: 'green' }}
              rel="noreferrer"
            >
              {children}
            </a>
          ),
          bold: ({ children }) => <strong>{children}</strong>,
          Asset: {
            text: () => (
              <div>
                <p>text plain</p>
              </div>
            ),
          },
        }}
      />;

    </div>
  )
}

// Para gerar individualmente cada url de página
export const getStaticPaths: GetStaticPaths = async (context) => {
  const { data } = await client.query({
    query: gql`
      query {
        streams {
          slug,
        }
      }
    `
  })

  const { streams } = data;
  const paths = streams.map((stream: any) => ({
    params: { slug: [stream.slug] }
  }))

  return {
    paths,
    fallback: false
  }
}

// Para pegar as informações de cada stream 
export const getStaticProps: GetStaticProps = async (context) => {
  const slugArray = context.params!.slug as string[];
  const slug = slugArray[0];

  const { data } = await client.query({
    query: gql`
      query StreamBySlug($slug: String!) {
        streams (where: {slug: $slug}) {
          title,
          slug,
          streamDate,
          coverImage {
            url
          }
          guestName,
          description {
            raw,
            html
          }
        }
      }
    `,
    variables: { slug }
  })

  const { streams } = data;

  const stream = streams[0];

  return {
    props: {
      stream
    }
  }
}


