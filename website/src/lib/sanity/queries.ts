import {defineQuery} from 'groq'

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == "/"][0]{
    title,
    pageBuilder[]{
      _key,
      _type,
      ...
    }
  }
`)

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    header{
      logo,
      navLinks[]{
        _key,
        label,
        url
      }
    },
    footer{
      columns[]{
        _key,
        title,
        links[]{
          _key,
          label,
          url
        }
      },
      copyrightText
    }
  }
`)
