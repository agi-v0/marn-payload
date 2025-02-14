import { PayloadRequest, CollectionSlug } from 'payload'
import { Locale } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
  locale: Locale | string
}

export const generatePreviewPath = ({ collection, slug, req, locale }: Props) => {
  const localeString = typeof locale === 'string' ? locale : String(locale)

  const path = `/${locale}/${collectionPrefixMap[collection]}/${slug}`

  const params = {
    slug,
    collection,
    locale: localeString,
    path,
  }

  const encodedParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, String(value))
  })

  const isProduction =
    process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  const protocol = isProduction ? 'https:' : req.protocol

  const url = `${protocol}//${req.host}/${locale}/next/preview?${encodedParams.toString()}`

  return url
}
