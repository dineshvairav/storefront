import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UshaLogo } from "@/components/UshaLogo";

export default function Home() {
  return (
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
        <div className="mb-6 rounded-2xl border-2 border-accent/70 bg-black/30 p-4 backdrop-blur-sm">
          <UshaLogo />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-200 font-sans">
          usha<span className="text-primary">O</span>app
        </h1>

        <p className="max-w-md text-lg text-gray-300 mb-8 font-sans">
          Your one-stop destination for quality household goods, from traditional
          vessels to modern appliances.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="secondary" size="lg" className="px-10 py-6 text-lg font-sans">
            Know More
          </Button>
          <Button variant="default" size="lg" className="px-10 py-6 text-lg font-sans">
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}
