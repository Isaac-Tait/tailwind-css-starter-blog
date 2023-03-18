import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* 
      I want this to flex grow into the space created on line 50 of layoutWrapper.js 
      I tried h-full, h-fit, grow, and even h-5/6 to get the div below to grow into the space it has... 
      Nothing seems to be working.
      */}
      <div className="rounded-lg bg-blue-200 shadow-lg">
        <p className="h-full text-center">placeholder</p>
      </div>
    </div>
  )
}
