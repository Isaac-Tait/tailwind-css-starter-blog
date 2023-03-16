import Image from 'next/image'

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mb-2 flex h-screen flex-wrap content-center rounded-lg bg-blue-200 shadow-lg">
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

      <div className="mb-2 flex h-screen w-full rounded-lg bg-blue-300 shadow-lg md:text-base">
        <div className="mx-auto flex grow grid-cols-4 flex-col justify-between md:grid md:gap-2">
          {/* About Me */}
          <div className="mt-20 flex justify-center">
            <p className="z-50 font-bold tracking-wide md:mt-40">
              {/*
              <span role="img" aria-label="ufo flying saucer">
                &#128760;{' '}
              </span>
              */}
              <Link
                to="/about"
                className="rounded-sm p-1 text-white hover:bg-blue-500 hover:text-white"
              >
                About
              </Link>
              &nbsp;me
            </p>
            <div className="mt-32 -ml-8 hidden h-24 w-24 rounded-3xl bg-blue-200 md:block"></div>
          </div>
          {/* OG */}
          <div className="flex justify-center md:flex-col md:items-center md:justify-between">
            <div className="mt-16 -mr-16 hidden h-20 w-20 rounded-2xl bg-blue-200 md:block"></div>
            <p className="z-0 items-start font-bold tracking-wide">
              The OG{' '}
              <Link
                href="https://mountaintopcoding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-1 text-white hover:bg-blue-500 hover:text-white"
              >
                mountainTopCoding(
                <span role="img" aria-label="mountain with snow-cap">
                  &#127956;
                </span>
                );
              </Link>
            </p>
            <div className="-mt-20 hidden h-24 w-24 rounded-full bg-blue-200 md:block"></div>
            <div className="mb-16 ml-16 hidden h-16 w-20 rounded-2xl bg-blue-200 md:block"></div>
          </div>
          {/* Resume */}
          <div className="flex justify-center md:flex-col md:items-center md:justify-between">
            <div className="mt-20 hidden h-20 w-20 rounded-full bg-blue-200 md:block"></div>
            <p className="font-bold tracking-wide md:mt-40">
              My{' '}
              <Link
                href="https://mountaintop-coding.s3.us-west-1.amazonaws.com/Isaac_Tait_Resume_Portfolio.pdf"
                rel="noopener noreferrer"
                className="rounded-sm p-1 text-white hover:bg-blue-500 hover:text-white"
              >
                resume
              </Link>
            </p>
            <div className="mb-32 hidden h-16 w-20 rounded-2xl bg-blue-200 md:block"></div>
          </div>
          {/* Starship for Sale */}
          <div className="flex justify-center md:flex-col md:justify-end ">
            <div className="mx-auto mb-32 hidden h-40 w-40 rounded-full bg-blue-200 md:block"></div>
            <p className="mb-40 font-bold tracking-wide">
              A fun side project{' '}
              <Link
                href="https://starshipfor.sale"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-1 text-white hover:bg-blue-500 hover:text-white"
              >
                Starship For Sale
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-2 grid h-screen grid-cols-1 rounded-lg pb-2 shadow-lg heropattern-topography-blue-500 md:grid-cols-6">
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        {/*I Love To Fish*/}
        <div className="relative my-auto ml-12 box-content w-12 md:ml-0 md:w-32">
          <Link href="https://iloveto.fish" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1678896397/mountainTopCoding/fishing_hxxsep.png"
              alt="fish on!"
              width={500}
              height={500}
              className="mx-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              I love to fish
            </p>
          </Link>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*VW Site*/}
        <div className="relative my-auto ml-24 box-content w-12 md:ml-0.5 md:w-32">
          <Link href="https://vwtypetwo.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1678896397/mountainTopCoding/compass_l0xzbk.png"
              alt="never get lost"
              width={500}
              height={500}
              className="mx-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              VW Type Two
            </p>
          </Link>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*GitHub*/}
        <div className="relative my-auto ml-36 box-content w-12 md:ml-0 md:w-28">
          <Link href="https://github.com/Isaac-Tait" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1678896397/mountainTopCoding/campfire_hw2lbp.png"
              alt="a lovely crackling campfire"
              width={500}
              height={500}
              className="mx-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center rounded text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              GitHub
            </p>
          </Link>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Royal Ridges*/}
        <div className="relative my-auto ml-48 box-content w-12 md:ml-0 md:w-32">
          <Link href="https://royalridges.org" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1678896398/mountainTopCoding/guitar_cembhd.png"
              alt="music to my ears"
              width={500}
              height={500}
              className="mx-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center rounded px-1 text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              Royal Ridges Retreat
            </p>
          </Link>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Gravel Cycling*/}
        <div className="relative my-auto ml-48 box-content w-12 md:ml-0 md:w-32">
          <Link href="https://macadamgrinding.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1678896398/mountainTopCoding/map_hzg9v2.png"
              alt="a map over a map..."
              width={500}
              height={500}
              className="mx-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center rounded px-1 text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              Gravel Cycling
            </p>
          </Link>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Linkedin*/}
        <div className="relative my-auto ml-60 box-content w-12 md:ml-0 md:w-32">
          <Link
            href="https://www.linkedin.com/in/isaacmtait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1678896635/mountainTopCoding/tent_hdkwpn.png"
              alt="home away from home"
              width={500}
              height={500}
              className="mx-auto h-auto max-w-full"
            />
            <p className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-1000 hover:bg-blue-400 hover:opacity-100">
              LinkedIn Profile
            </p>
          </Link>
        </div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Blog*/}
        <div className="relative my-auto ml-72 box-content w-12 md:ml-0 md:w-32">
          <Link href="https://blog.mountaintopcoding.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1678896397/mountainTopCoding/hikingBoots_quqrl9.png"
              alt="lace up those boots and hit the trail"
              width={500}
              height={500}
              className="mx-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              My Blog
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}
