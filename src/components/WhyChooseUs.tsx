import type { LucideIcon } from "lucide-react";
import { Headset, Map, ShieldCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#EAFAFF] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-normal tracking-tight text-neutral-950 md:text-6xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-base text-neutral-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="gap-0 rounded-none border-0 border-b border-neutral-200 bg-white p-10 shadow-none"
            >
              <CardHeader className="gap-0 p-0">
                <Icon
                  className="size-9 text-[#1AA0C4]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <CardTitle className="font-heading mt-6 text-2xl font-normal text-neutral-950">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="mt-4 text-base leading-7 text-neutral-500">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
