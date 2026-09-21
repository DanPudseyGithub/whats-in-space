import {defineQuery} from 'groq'

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == "home"][0]{
    title,
    pageBuilder[]{
      _key,
      _type,
      ...
    }
  }
`)
