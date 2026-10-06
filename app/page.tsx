import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CompetenceTable from "@/components/CompetenceTable";
import Missions from "@/components/Missions";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <CompetenceTable />
      <Missions />
      <Timeline />
      <About />
      <Contact />
    </main>
  );
}
