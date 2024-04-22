import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Marquee from "react-fast-marquee";

const UseCases = ({ dictionary: dic }: { dictionary: any }) => (
  <section
    id="use-cases"
    className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto py-8 sm:py-16"
  >
    <div className="mb-8">
      <h2 className="text-4xl text-center font-bold">{dic.useCase.title}</h2>
    </div>
    <Marquee direction="left" autoFill pauseOnHover>
      <div className="relative w-[400px] p-[20px] bg-[#dde1e5] rounded mx-2">
        <div className="relative overflow-hidden w-full h-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              className="rounded object-cover"
              src="/thumbnail.png"
              fill
              alt="Indie Road"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="relative w-[400px] p-[20px] bg-[#dde1e5] rounded mx-2">
        <div className="relative overflow-hidden w-full h-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              className="rounded object-cover"
              src="/thumbnail.png"
              fill
              alt="Indie Road"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="relative w-[400px] p-[20px] bg-[#dde1e5] rounded mx-2">
        <div className="relative overflow-hidden w-full h-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              className="rounded object-cover"
              src="/thumbnail.png"
              fill
              alt="Indie Road"
            />
          </AspectRatio>
        </div>
      </div>
    </Marquee>
  </section>
);

export default UseCases;
