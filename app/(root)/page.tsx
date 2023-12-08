import Footer from "@/components/root/Footer";
import Hero from "@/components/root/Hero";
import Services from "@/components/root/Services";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Footer />
      </div>
    </>
  );
}
