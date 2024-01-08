
import Intro from "@/components/intro";
import About from "@/components/about";
import SectionDivider from "@/components/sectionDivider";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      <SectionDivider/>
      <About />

    
    </main>
  )
}
