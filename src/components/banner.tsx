import Image from "next/image"
import { ArrowRightIcon, SearchIcon } from "lucide-react"

const searchFields = [
  { label: "Location", value: "Address, City Or Zip" },
  { label: "Date/Duration", value: "Anytime/3 Days" },
  { label: "Budget", value: "$0-$3000" },
  { label: "People", value: "5-10" },
]

export function Banner() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden font-system">
      {/* Background */}
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center px-6 pt-[186px] text-center">
        <h1 className="w-full max-w-full text-4xl leading-tight font-extralight tracking-[-0.01em] text-white sm:text-5xl md:text-7xl lg:text-[98px] lg:leading-[104px]">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-[10px] w-full max-w-[660px] text-base leading-[28px] text-white sm:text-lg sm:leading-[35px] md:text-xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#destinations"
            className="inline-flex h-14 items-center gap-[30px] bg-brand px-[26px] text-[15px] font-medium tracking-wide text-white uppercase transition-opacity hover:opacity-90"
          >
            Explore Now
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </a>
          <a
            href="#destinations"
            className="inline-flex h-14 items-center border border-white/40 bg-white/40 px-[24px] text-[15px] font-medium tracking-wide text-white uppercase transition-colors hover:bg-white/50"
          >
            View Destination
          </a>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative z-10 grid grid-cols-1 divide-y divide-white/30 bg-white/40 sm:grid-cols-2 lg:h-[74px] lg:grid-cols-[repeat(4,minmax(0,1fr))_200px] lg:divide-x-2 lg:divide-y-0">
        {searchFields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col justify-center gap-[10px] px-[25px] py-4 lg:py-0"
          >
            <span className="text-[16px] leading-none font-medium text-white">
              {field.label}
            </span>
            <span className="text-[14px] leading-none text-white/85">
              {field.value}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="flex h-14 items-center justify-center bg-brand text-[16px] font-medium text-white transition-opacity hover:opacity-90 sm:col-span-2 lg:col-span-1 lg:h-full"
        >
          <SearchIcon aria-hidden="true" className="mr-2 size-4 lg:hidden" />
          Search
        </button>
      </div>
    </section>
  )
}

export default Banner
