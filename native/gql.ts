import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://bear-with-life-beta-api.herokuapp.com/v1/graphql',
  headers: { 'x-hasura-admin-secret': 'VacuumlabsIsTheBest' },
})
