import { Button } from "@/components/ui/button";

const CTA = ({ dictionary: dic }: { dictionary: any }) => (
  <section className="py-8 sm:py-16">
    <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
      <div className="mb-8">
        <h2 className="max-w-screen-md mx-auto text-center text-2xl md:text-3xl mb-2 font-bold">
          {dic.cta.label}
        </h2>
        <p className="max-w-screen-md mx-auto text-center text-base sm:text-lg text-zinc-400">
          {dic.cta.description1}
        </p>
        <p className="max-w-screen-md mx-auto text-center text-base sm:text-lg text-zinc-400">
          {dic.cta.description2}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Button size="lg" className="px-6 h-10 rounded text-sm font-medium  duration-300 ease-in-out active:scale-95 transition-all">
          {dic.cta.button}
        </Button>
      </div>
    </div>
  </section>
);

export default CTA;
