import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="w-full rounded-lg bg-blue-200 shadow-lg">
        <p className="my-auto">
          Hello{' '}
          <span role="img" aria-label="waving hand">
            &#128075;
          </span>{' '}
          and welcome to my portfolio. My name is Isaac Tait and I am an activist web developer who
          loves the outdoors.
          {/* <div className="-mt-48 -ml-8 h-64 w-64 rounded-full bg-blue-300"></div> */}
        </p>
      </div>
    </>
  )
}
