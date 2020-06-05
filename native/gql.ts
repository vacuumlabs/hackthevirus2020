import ApolloClient from 'apollo-boost'

export const getClient = (token: string) =>
  new ApolloClient({
    uri: 'https://bear-with-life-beta-api.herokuapp.com/v1/graphql',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
