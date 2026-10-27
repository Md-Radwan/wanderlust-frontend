import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const searchFields = [
  { id: "location", label: "Location", placeholder: "Address, City Or Zip" },
  { id: "date-duration", label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { id: "budget", label: "Budget", placeholder: "$0-$3000" },
  { id: "people", label: "People", placeholder: "5-10" },
];

export default function Banner() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-[url('/images/Banner.png')] bg-cover bg-center">
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="max-w-4xl text-4xl leading-[1.1] font-medium text-white sm:text-5xl md:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-3 rounded-md bg-brand px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-brand/90"
          >
            Explore Now
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 rounded-md bg-white/20 px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase backdrop-blur-md transition-colors hover:bg-white/30"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search bar pinned to the bottom of the banner */}
      <form className="relative z-10 grid w-full grid-cols-1 bg-black/40 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
        {searchFields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col gap-1 border-b border-white/20 px-6 py-4 lg:border-r lg:border-b-0"
          >
            <label
              htmlFor={field.id}
              className="text-base font-semibold text-white"
            >
              {field.label}
            </label>
            <Input
              id={field.id}
              name={field.id}
              type="text"
              placeholder={field.placeholder}
              className="h-auto min-h-0 rounded-none border-0 bg-transparent px-0 py-0 text-sm text-white/90 shadow-none focus-visible:border-0 focus-visible:ring-0 dark:bg-transparent"
            />
          </div>
        ))}
        <Button
          type="submit"
          size="lg"
          className="h-auto rounded-none bg-brand px-10 py-5 text-base font-semibold text-white hover:bg-brand/90 sm:col-span-2 lg:col-span-1"
        >
          Search
        </Button>
      </form>
    </section>
  );
}
