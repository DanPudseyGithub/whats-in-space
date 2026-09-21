import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons/Image'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required().warning('Alt text is important for SEO and accessibility'),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Call to action',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: (rule) => rule.uri({scheme: ['http', 'https']}),
        }),
        defineField({
          name: 'style',
          title: 'Style',
          type: 'string',
          options: {
            list: [
              {title: 'Primary', value: 'primary'},
              {title: 'Secondary', value: 'secondary'},
            ],
            layout: 'radio',
          },
          initialValue: 'primary',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'subheading', media: 'image'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled hero',
        subtitle,
        media: media ?? ImageIcon,
      }
    },
  },
})
