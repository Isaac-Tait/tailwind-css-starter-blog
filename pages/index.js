import Image from 'next/image'

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="h-100 mb-2 flex flex-wrap content-center rounded-lg bg-blue-200 shadow-lg">
        <p className="mx-auto w-1/2 justify-center text-xl font-semibold md:text-5xl">
          Hello{' '}
          <span role="img" aria-label="waving hand">
            &#128075;
          </span>
          ,&nbsp;my name is&nbsp;
          <span className="text-blue-500">Isaac Tait</span>&nbsp;- a Jamstack web developer who
          loves the outdoors.
          <div className="-mt-48 -ml-8 h-64 w-64 rounded-full bg-blue-300"></div>
        </p>
      </div>
    </>
  )
}
