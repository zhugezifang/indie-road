import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = ({ dictionary: dic }: { dictionary: any }) => {
  return (
    <section id="hero" className="py-8 sm:py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 min-w-0">
          <div className="mb-4 md:mb-8">
            <h1 className="text-3xl md:text-4xl xl:leading-[52px] xl:text-5xl mb-2 lg:mb-4 font-bold text-center sm:text-left">
              {dic.hero.title1}
              <span className="text-primary">{dic.hero.title2}</span>
            </h1>
            <div className="text-base md:text-lg text-gray-400 text-center sm:text-left">
              <div>
                {dic.hero.description1}
                <span className="text-primary">{dic.hero.description2}</span>
                {dic.hero.description3}
              </div>
              <p>{dic.hero.description4}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="w-auto active:scale-95 transition-transform transition-color whitespace-nowrap">
              <a
                className="rounded flex items-center justify-center"
                href="https://wwglt1tbtro.feishu.cn/wiki/TbHGwo6ZZi2Sj5kjsZKcz1BKnqd"
              >
                <span>{dic.hero.cta}</span>
                <span className="ml-1 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.692 11.335q.552-.589.776-1.364t.224-1.586t-.224-1.587t-.776-1.363q1.135.103 1.875.95t.74 2t-.74 2t-1.875.95m4.777 7.28q.102-.238.163-.503t.06-.535v-.654q0-.735-.265-1.4t-.839-1.096q1.025.315 1.873.903t.847 1.593v.654q0 .44-.3.74t-.739.298zm1.839-8.115h-1.5q-.213 0-.357-.144q-.143-.144-.143-.357t.143-.356t.357-.143h1.5V8q0-.213.144-.356q.144-.144.356-.144q.213 0 .356.144t.144.356v1.5h1.5q.212 0 .356.144t.144.357t-.144.356t-.356.143h-1.5V12q0 .213-.144.356q-.144.144-.357.144t-.356-.144t-.143-.356zm-10.616.885q-1.237 0-2.118-.882t-.882-2.118t.882-2.12t2.118-.88t2.119.88t.881 2.12t-.881 2.118t-2.119.882m-7 6.192v-.608q0-.619.36-1.158t.971-.838q1.415-.679 2.833-1.018t2.836-.34t2.837.34t2.833 1.018q.61.298.97.838t.36 1.158v.608q0 .44-.299.74t-.74.298H2.732q-.44 0-.74-.299t-.299-.74"
                    />
                  </svg>
                </span>
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 md:max-w-sm lg:max-w-2xl w-full h-full relative sm:px-4 md:px-12">
          <Image
            src="/img-hero.svg"
            alt="hero-section-with-ctas-image"
            width={844}
            height={544}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
