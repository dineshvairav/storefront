"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UshaLogo } from "@/components/UshaLogo";
import { ContactModal } from "@/components/contact-modal";
import { KnowMoreModal } from "@/components/know-more-modal";
import { useState, useEffect } from "react";

const backgroundImages = [
  { src: "./home_1.png", hint: "kitchen appliances dark" },
  { src: "./home_2.png", hint: "kitchen utensils" },
  { src: "./home_3.png", hint: "modern cookware" },
  { src: "./home_4.png", hint: "assorted pots pans" },
];

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isKnowMoreModalOpen, setKnowMoreModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 15000); // 12s stand + 3s transition

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const nextImageIndex = (currentImageIndex + 1) % backgroundImages.length;

  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt="Background of kitchen appliances"
              fill
              className={`object-cover transition-opacity duration-[3000ms] ease-in-out brightness-50 will-change-opacity ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              data-ai-hint={image.hint}
              priority={index === currentImageIndex || index === nextImageIndex}
            />
          ))}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
          <div className="mb-4">
            <Image
              src="./logo.png"
              alt="Usha Logo"
              width={240}
              height={100}
              className="object-contain"
              data-ai-hint="company logo"
            />
          </div>
          <a
            href="https://shop.usha1960.trade/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8"
          >
            <div className="animated-gradient-border p-4 px-8">
              <UshaLogo />
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
              className="px-10 py-6 text-lg font-sans transition-all hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1"
              onClick={() => setKnowMoreModalOpen(true)}
            >
              Know More
            </Button>
            <Button
              variant="default"
              size="lg"
              className="px-10 py-6 text-lg font-sans transition-all hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
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
