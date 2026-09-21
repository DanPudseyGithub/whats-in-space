import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

export const richText = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {content: 'content'},
    prepare({content}) {
      const firstBlock = (content || []).find((block: {_type: string}) => block._type === 'block')
      const text =
        firstBlock?.children?.map((span: {text: string}) => span.text).join('') ?? ''

      return {
        title: text || 'Untitled rich text',
        subtitle: 'Rich Text',
      }
    },
  },
})
