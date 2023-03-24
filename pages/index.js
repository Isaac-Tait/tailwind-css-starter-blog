import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div className="h-full rounded-lg shadow-lg heropattern-topography-lime-400 dark:bg-slate-600">
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* 
      I want this to flex grow into the space created on line 50 of layoutWrapper.js 
      I tried h-full, h-fit, grow, and even h-5/6 to get the div below to grow into the space it has... 
      Nothing seems to be working.
      */}
      <div className="flex h-full flex-wrap content-center">
        <p className="mx-auto w-1/2 justify-center text-xl font-semibold md:text-5xl">
          Hello{' '}
          <span role="img" aria-label="waving hand">
            &#128075;
          </span>
          ,&nbsp;and welcome to my portfolio. My name is Isaac Tait and I am an activist web
          developer who loves the outdoors.
          <div className="-ml-50 -mt-56 h-64 w-64 rounded-full bg-lime-700 dark:bg-slate-400"></div>
        </p>
      </div>
    </div>
  )
}
