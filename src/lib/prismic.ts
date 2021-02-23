import Prismic from 'prismic-javascript'

// Colocar como variável de ambiente
export const apiEndpoint =
  'https://devcommercenextjsrocket.cdn.prismic.io/api/v2'

export const client = (req = null) => {
  const options = req ? { req } : null
  return Prismic.client(apiEndpoint, options)
}
