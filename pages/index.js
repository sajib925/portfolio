import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ClientsSection from "../Sections/ClientsSection/ClientsSection";
import DesignSection from "../Sections/DesignSection/DesignSection";
import DigitalProductsSection from "../Sections/DigitalProductsSection/DigitalProductsSection";
import HeroSection from "../Sections/HeroSection/HeroSection";
import ProjectsSection from "../Sections/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <DigitalProductsSection />
      <DesignSection />
      <ClientsSection />
      <Footer />
    </div>
  );
}
