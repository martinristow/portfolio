import Header from "@/app/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header/>

        <main style={{ paddingTop: "var(--header-height)" }}>
            <div id="top"        className="h-screen bg-card">Top</div>
            <div id="about"      className="h-screen">About</div>
            <div id="experience" className="h-screen">Experience</div>
            <div id="skills"     className="h-screen">Skills</div>
            <div id="projects"   className="h-screen">Projects</div>
            <div id="contact"    className="h-screen">Contact</div>
        </main>
    </>
  );
}
