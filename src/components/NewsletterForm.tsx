"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function NewsletterForm() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // TODO: call your newsletter API here
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex h-12 max-w-[320px] items-center bg-[#3D3D3D]"
    >
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        aria-label="Email address"
        className="h-full flex-1 rounded-none border-0 bg-transparent px-4 text-base text-white shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-full w-14 items-center justify-center text-white transition-opacity hover:opacity-70"
      >
        <ArrowUpRight className="size-5" />
      </button>
    </form>
  );
}