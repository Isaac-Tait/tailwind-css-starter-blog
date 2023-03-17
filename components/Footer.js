import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© 2019 - ${new Date().getFullYear()}`}</div>
          <div>{` - `}</div>
          <div className="hidden md:block">{` Built with TailwindCSS && NextJS `}</div>
          <div>{` - `}</div>
          <a
            href="https://github.com/Isaac-Tait/tailwind-css-starter-blog"
            target="_blank"
            rel="noreferrer"
          >
            <p className="px-1 text-blue-600 underline underline-offset-4 hover:rounded-lg hover:bg-blue-600 hover:text-white">
              {siteMetadata.title}
            </p>
          </a>
        </div>
      </div>
    </footer>
  )
}
