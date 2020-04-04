import { GraphQLClient } from 'graphql-request'

import { getSdk } from './graphqlSdk'

export const client = getSdk(
  new GraphQLClient('https://bear-with-life-beta-api.herokuapp.com/v1/graphql', {
    headers: { 'x-hasura-admin-secret': 'VacuumlabsIsTheBest' },
  }),
)
