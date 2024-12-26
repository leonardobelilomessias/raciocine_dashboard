import { type SchemaTypeDefinition } from 'sanity'
import { postType } from '../schemas/posts'
import { author } from '../schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, author],
}
