import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import UseCases from "@/components/use-cases";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import { getDictionary } from "@/lib/i18n";

export const runtime = "edge";

export default async function Home({ params: { lang }}: { params: { lang: string } }) {
  const dic = await getDictionary(lang);
  return (
    <div>
      <Header dictionary={dic} />
      <Hero dictionary={dic} />
      <UseCases dictionary={dic} />
      <Features dictionary={dic} />
      <FAQ dictionary={dic} />
      <CTA dictionary={dic} />
      <Footer />
    </div>
  );
}
