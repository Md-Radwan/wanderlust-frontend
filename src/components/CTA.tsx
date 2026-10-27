// components/sections/cta.tsx
import Image from "next/image";
import ctaImg from "../../public/images/CTA.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative isolate flex min-h-[440px] items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background image: save CTA_1.png as public/images/cta-bg.png */}
      <Image
        src={ctaImg}
        alt="Call to action background image"
        fill
        priority={false}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Dark overlay + edge vignette */}
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      {/* Content */}
      <div className="mx-auto max-w-[1280px] px-6 py-20 text-center lg:px-20">
        <h2 className="font-heading text-4xl font-normal tracking-tight text-white md:text-6xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-base text-white md:text-lg">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Link href="/booking" className="flex justify-center">
          <Button
            size="lg"
            className="mt-9 h-14 rounded-none bg-white px-6 text-sm font-normal uppercase tracking-normal text-neutral-950 hover:bg-neutral-100"
          >
            Book Your Trip Today
            <ArrowRight className="ml-5 size-5" aria-hidden="true" />
          </Button>
        </Link>
        
      </div>
    </section>
  );
}
