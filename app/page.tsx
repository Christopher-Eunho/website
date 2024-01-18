
import Intro from "@/components/intro";
import About from "@/components/about";
import SectionDivider from "@/components/sectionDivider";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      <SectionDivider/>
      <About />
      <Projects/>

    
    </main>
  )
}
