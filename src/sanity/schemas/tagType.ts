import { defineField, defineType } from "sanity";

export const tagType = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    ],
  });
  