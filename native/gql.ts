import ApolloClient from 'apollo-boost'
import _ from 'lodash'

export const getClient = (userId?: string) =>
  new ApolloClient({
    uri: 'https://bear-with-life-beta-api.herokuapp.com/v1/graphql',
    headers: _.pickBy(
      {
        'x-hasura-admin-secret': 'VacuumlabsIsTheBest',
        'x-hasura-role': 'admin',
        'x-hasura-user-id': userId,
      },
      _.identity,
    ),
  })
