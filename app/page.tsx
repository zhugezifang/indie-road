import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <FAQ />
      {/* <Content />
      <Footer /> */}
    </div>
  );
}
