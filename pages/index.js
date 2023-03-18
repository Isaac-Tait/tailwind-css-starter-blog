import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="rounded-lg bg-blue-200 shadow-lg">
        <p className="text-center">placeholder</p>
      </div>
    </div>
  )
}
