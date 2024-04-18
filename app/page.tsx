import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <UseCases />
      <Features />
      <FAQ />
      {/* <Content />
      <Footer /> */}
    </div>
  );
}
