import { graphql, buildSchema } from 'graphql'

import schema from '../../graphql/schema'
import resolver from '../../graphql/resolver'

const buildedSchema = buildSchema(schema)
const query = `{
  tweets{
    id
    text
    author{
      name
    }
  }
}`

export default async (_,res) => {

  const response = await graphql(buildedSchema, query, resolver)

  return res.json(response)
}