import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import MobileLogo from '@/data/mobileLogo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
              </div>
            </Link>
          </div>
          {/* Mobile Logo */}
          <div className="block md:hidden">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="mr-3">
                <MobileLogo />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto grow">{children}</main>
        <div className="fixed bottom-0 z-0 mx-auto w-full">
          <Footer />
        </div>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
