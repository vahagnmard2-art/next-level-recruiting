import { Helmet } from 'react-helmet-async'

interface Props {
  title: string
  description: string
  canonical: string
  ogImage?: string
  schema?: object
}

const SITE = 'https://next-level-recruiting-theta.vercel.app'
const DEFAULT_OG = `${SITE}/nlr-og.svg`

export default function PageSEO({ title, description, canonical, ogImage = DEFAULT_OG, schema }: Props) {
  const fullTitle = `${title} | Next Level Recruiting — Southern California`
  const canonicalUrl = `${SITE}${canonical}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Next Level Recruiting" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Next Level Recruiting — Southern California's premier athlete recruiting agency" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NLRAthletes" />
      <meta name="twitter:creator" content="@NLRAthletes" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Next Level Recruiting — Southern California's premier athlete recruiting agency" />

      {/* JSON-LD structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
