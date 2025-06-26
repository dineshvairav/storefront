"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UshaLogo } from "@/components/UshaLogo";
import { ContactModal } from "@/components/contact-modal";
import { KnowMoreModal } from "@/components/know-more-modal";
import { useState } from "react";

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isKnowMoreModalOpen, setKnowMoreModalOpen] = useState(false);

  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1200x800.png"
            alt="Background of kitchen appliances"
            fill={true}
            objectFit="cover"
            className="brightness-50"
            data-ai-hint="kitchen appliances dark"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
          <div className="mb-6">
            <UshaLogo />
          </div>

          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block mb-8"
          >
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 opacity-75 blur-md transition duration-500 group-hover:opacity-100"
            ></div>
            <div className="relative flex items-center rounded-full bg-black px-10 py-4 text-3xl font-bold leading-none text-white md:text-4xl">
              ushª<span className="text-primary">O</span>ªpp
            </div>
          </a>

          <p className="max-w-md text-lg text-gray-300 mb-8 font-sans">
            Your one-stop destination for quality household goods, from traditional
            vessels to modern appliances.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="px-10 py-6 text-lg font-sans"
              onClick={() => setKnowMoreModalOpen(true)}
            >
              Know More
            </Button>
            <Button
              variant="default"
              size="lg"
              className="px-10 py-6 text-lg font-sans"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setContactModalOpen}
      />
      <KnowMoreModal
        isOpen={isKnowMoreModalOpen}
        onOpenChange={setKnowMoreModalOpen}
      />
    </>
  );
}
