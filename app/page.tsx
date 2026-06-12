import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full pt-24 flex flex-col gap-24">
      <Hero />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
