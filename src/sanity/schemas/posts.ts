import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title:"Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'description',
      description:"Uma breve descrição sobre o conteudo",
      type:"string",
      validation: (rule) => rule.min(20).max(200).required(),
    }),
    defineField({
      type: 'reference',
      to:[{type:'author'}],
      name:"author",
      title:"Author"
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title:"Slug",
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title:"PublishedAt",
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options:{hotspot:true}
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})