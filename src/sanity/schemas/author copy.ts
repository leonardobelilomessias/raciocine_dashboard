import { defineField, defineType } from 'sanity';

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
      description: 'Profissão do autor (ex.: Copywriter, Designer, Filmmaker).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Breve biografia do autor.',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Descrição da imagem para SEO e acessibilidade.',
        }),
      ],
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'URL do perfil no Instagram.',
      validation: (rule) =>
        rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      description: 'URL do perfil no LinkedIn.',
      validation: (rule) =>
        rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
  ],
});

