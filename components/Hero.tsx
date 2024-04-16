import Image from "next/image";
import { Button } from "@/components/ui/button";

// , aimed at
//             refining their ideas, enhancing their product design and UI design
//             skills, and accumulating valuable practical experience.
const Hero = () => (
  <section id="hero" className="py-8 sm:py-20 md:py-32">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 min-w-0">
        <div className="mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl xl:text-5xl mb-2 lg:mb-4 font-bold">
            Chengpu&apos;s <span className="text-primary">Practical Group</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            A <span className="text-primary">free, self-training and mutual learning</span> community,
          </p>
          <p className="text-base md:text-lg text-gray-400">
            aimed at refining their ideas, enhancing their product design and UI
            design skills
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button className="w-full sm:w-auto flex items-center justify-center active:scale-95 transition-transform transition-color whitespace-nowrap">
            Join us !
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0 md:max-w-sm lg:max-w-lg w-full h-full relative sm:px-4 md:px-12">
        <Image
          src="/img-hero.svg"
          alt="hero-section-with-ctas-image"
          width="512"
          height="512"
        />
        {/* <img alt="hero-section-with-ctas-image" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="rounded-lg" style="color:transparent;width:100%;height:auto;object-fit:contain" src="/_next/static/media/image.10e99c15.svg"> */}
      </div>
    </div>
  </section>
);

export default Hero;
