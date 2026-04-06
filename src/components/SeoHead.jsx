import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Hejaaz Technologies'
const DEFAULT_DESC = 'Industrial Automation & Crane Safety Systems. Safe Load Indicators, Factory Automation, PAN-India Support. ISO 9001:2015 Certified.'

/**
 * SEO-friendly meta tags. Use on every page.
 */
export default function SeoHead({ title, description = DEFAULT_DESC, path = '' }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Industrial Automation & Crane Safety Systems`
  const canonical = path ? `https://hejaaztechnologies.com${path}` : undefined

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  )
}
