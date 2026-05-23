import Header from "@/app/components/Header/Header";
import TopSection from "@/app/components/TopSection/TopSection";
import AboutSection from "@/app/components/AboutSection/AboutSection";
import ExperienceSection from "@/app/components/ExperienceSection/ExperienceSection";
import SkillsSection from "@/app/components/SkillsSection/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection/ProjectsSection";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <TopSection/>

                <AboutSection/>

                <ExperienceSection/>

                <SkillsSection/>

                <ProjectsSection/>


                <section
                    id="contact"
                    className="h-screen scroll-mt-[var(--header-height)]"
                >
                    Contact
                </section>
            </main>
        </>
    );
}