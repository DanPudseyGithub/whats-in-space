import {defineType, defineField, defineArrayMember} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'
import {FooterColumnsInput} from './components/FooterColumnsInput'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      group: 'header',
      fields: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'navLinks',
          title: 'Navigation links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'navLink',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {title: 'label', subtitle: 'url'},
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        defineField({
          name: 'columns',
          title: 'Columns',
          type: 'array',
          validation: (rule) => rule.min(1).max(4).error('Add between 1 and 4 footer columns'),
          components: {input: FooterColumnsInput},
          of: [
            defineArrayMember({
              type: 'object',
              name: 'footerColumn',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'links',
                  title: 'Links',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      name: 'footerLink',
                      fields: [
                        defineField({
                          name: 'label',
                          title: 'Label',
                          type: 'string',
                          validation: (rule) => rule.required(),
                        }),
                        defineField({
                          name: 'url',
                          title: 'URL',
                          type: 'string',
                          validation: (rule) => rule.required(),
                        }),
                      ],
                      preview: {
                        select: {title: 'label', subtitle: 'url'},
                      },
                    }),
                  ],
                }),
              ],
              preview: {
                select: {title: 'title', links: 'links'},
                prepare({title, links}) {
                  return {
                    title,
                    subtitle: `${links?.length ?? 0} link(s)`,
                  }
                },
              },
            }),
          ],
        }),
        defineField({
          name: 'copyrightText',
          title: 'Copyright text',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
