import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Impact from "@/components/our-impact";
import Tagline from "@/components/tagline";
import Imagine from "@/components/imagine";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <div className="pt-14 md:pt-16">
        <Hero />
        <Impact />
        <About />
        <Imagine />
        <Services />
        <Tagline />
        <Approach />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
