import { type SchemaTypeDefinition } from 'sanity'
import { postType } from '../schemas/posts'
import {  authorType } from '../schemas/author'
import { tagType } from '../schemas/tagType'
import { categoryType } from '../schemas/categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, authorType,tagType,categoryType],
}
