import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api-us-east-1.hygraph.com/v2/cl6tijclk1lki01um6b561l4t/master',
  cache: new InMemoryCache()
})

export default client;