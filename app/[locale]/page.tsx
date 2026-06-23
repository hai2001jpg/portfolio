import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

type HomeProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="w-full pt-24 flex flex-col gap-24">
      <Hero />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
