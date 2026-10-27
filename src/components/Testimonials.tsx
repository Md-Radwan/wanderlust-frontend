"use client";

// components/sections/testimonials.tsx
import * as React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import person1 from '../../public/images/person1.png'
import person2 from '../../public/images/person2.png'
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  image: StaticImageData;
};

// Put person1.png and person2.png in /public/images/testimonials/
const testimonials: Testimonial[] = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: person2,
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: person1,
  },
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: person2,
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: person1,
  },
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: person2,
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: person1,
  },
  // Add more testimonials here — the carousel scrolls when there are more than 2.
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-heading text-4xl font-normal tracking-tight text-neutral-950 md:text-6xl">
              What Travelers Say
            </h2>
            <p className="mt-3 text-base text-neutral-500">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous testimonial"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className="cursor-pointer size-[60px] rounded-full border-neutral-300 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-700 disabled:opacity-100 [&_svg]:size-5"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next testimonial"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              className="cursor-pointer size-[60px] rounded-full border-neutral-300 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-700 disabled:opacity-100 [&_svg]:size-5"
            >
              <ArrowRight/>
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="mt-12"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="pl-6 lg:basis-1/2">
                <article className="flex h-full flex-col-reverse gap-6 border border-neutral-100 bg-white p-6 sm:flex-row sm:justify-between">
                  <div className="flex flex-1 flex-col justify-between gap-10">
                    <blockquote className="font-heading text-[22px] leading-[1.1] text-neutral-950">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div>
                      <p className="font-heading text-lg text-[#1AA0C4]">
                        — {t.name}
                      </p>
                      <p className="mt-0.5 pl-6 text-sm text-neutral-500">
                        {t.location}
                      </p>
                    </div>
                  </div>

                  <div className="relative aspect-[218/264] w-full shrink-0 sm:w-[218px]">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="218px"
                      className="object-cover"
                    />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}