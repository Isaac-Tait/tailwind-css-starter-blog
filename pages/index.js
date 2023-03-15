import Image from 'next/image'

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import campFire from '../lib/images/campfire.png'
import tent from '../lib/images/tent.png'

import compass from '../lib/images/compass.png'
import fishing from '../lib/images/fishing.png'
import guitar from '../lib/images/guitar.png'
import hikingBoots from '../lib/images/hikingBoots.png'
import map from '../lib/images/map.png'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mb-2 flex flex-wrap content-center rounded-lg bg-blue-200 shadow-lg">
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
              <a
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
              </a>
            </p>
            <div className="-mt-20 hidden h-24 w-24 rounded-full bg-blue-200 md:block"></div>
            <div className="mb-16 ml-16 hidden h-16 w-20 rounded-2xl bg-blue-200 md:block"></div>
          </div>
          {/* Resume */}
          <div className="flex justify-center md:flex-col md:items-center md:justify-between">
            <div className="mt-20 hidden h-20 w-20 rounded-full bg-blue-200 md:block"></div>
            <p className="font-bold tracking-wide md:mt-40">
              My{' '}
              <a
                href="https://mountaintop-coding.s3.us-west-1.amazonaws.com/Isaac_Tait_Resume_Portfolio.pdf"
                rel="noopener noreferrer"
                className="rounded-sm p-1 text-white hover:bg-blue-500 hover:text-white"
              >
                resume
              </a>
            </p>
            <div className="mb-32 hidden h-16 w-20 rounded-2xl bg-blue-200 md:block"></div>
          </div>
          {/* Starship for Sale */}
          <div className="flex justify-center md:flex-col md:justify-end ">
            <div className="mx-auto mb-32 hidden h-40 w-40 rounded-full bg-blue-200 md:block"></div>
            <p className="mb-40 font-bold tracking-wide">
              A fun side project{' '}
              <a
                href="https://starshipfor.sale"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-1 text-white hover:bg-blue-500 hover:text-white"
              >
                Starship For Sale
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="heropattern-topography-blue-500 mb-2 grid h-screen grid-cols-1 rounded-lg pb-2 shadow-lg md:grid-cols-7">
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        {/*I Love To Fish*/}
        <div className="relative my-auto ml-12 box-content w-12 md:ml-0 md:w-32">
          <a href="https://iloveto.fish" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              I love to fish
            </div>
            <Image src={fishing} alt="fish on!" className="mx-auto" />
          </a>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*VW Site*/}
        <div className="relative my-auto ml-24 box-content w-12 md:ml-0.5 md:w-32">
          <a href="https://vwtypetwo.com" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              VW Type Two
            </div>
            <Image src={compass} alt="never get lost" className="mx-auto" />
          </a>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*GitHub*/}
        <div className="relative my-auto ml-36 box-content w-12 md:ml-0 md:w-28">
          <a href="https://github.com/Isaac-Tait" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex items-center justify-center rounded text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              GitHub
            </div>
            <Image src={campFire} alt="a lovely crackling campfire" className="mx-auto" />
          </a>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Royal Ridges*/}
        <div className="relative my-auto ml-48 box-content w-12 md:ml-0 md:w-32">
          <a href="https://royalridges.org" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex items-center justify-center rounded px-1 text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              Royal Ridges Retreat
            </div>
            <Image src={guitar} alt="music to my ears" className="mx-auto" />
          </a>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Gravel Cycling*/}
        <div className="relative my-auto ml-48 box-content w-12 md:ml-0 md:w-32">
          <a href="https://macadamgrinding.com" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex items-center justify-center rounded px-1 text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              Gravel Cycling
            </div>
            <Image src={map} alt="a map over a map..." className="mx-auto" />
          </a>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Linkedin*/}
        <div className="relative my-auto ml-60 box-content w-12 md:ml-0 md:w-32">
          <a
            href="https://www.linkedin.com/in/isaacmtait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              LinkedIn Profile
            </div>
            <Image src={tent} alt="home away from home" className="mx-auto" />
          </a>
        </div>

        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>
        <div className="box-content hidden h-12 w-12 p-4 md:block md:h-32 md:w-32"></div>

        {/*Blog*/}
        <div className="relative my-auto ml-72 box-content w-12 md:ml-0 md:w-32">
          <a href="https://blog.mountaintopcoding.com" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 flex items-center justify-center rounded text-center text-xl text-white opacity-0 duration-300 hover:bg-blue-400 hover:opacity-100">
              My Blog
            </div>
            <Image
              src={hikingBoots}
              alt="lace up those boots and hit the trail"
              className="mx-auto"
            />
          </a>
        </div>
      </div>
    </>
  )
}
