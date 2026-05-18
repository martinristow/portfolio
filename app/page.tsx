import Header from "@/app/components/Header/Header";

export default function Home() {
    return (
        <>
            <Header />

            <main style={{ paddingTop: "var(--header-height)" }}>
                <section
                    id="top"
                    className="h-screen bg-card scroll-mt-[var(--header-height)]"
                >
                    Top
                </section>

                <section
                    id="about"
                    className="h-screen scroll-mt-[var(--header-height)]"
                >
                    About
                </section>

                <section
                    id="experience"
                    className="h-screen scroll-mt-[var(--header-height)]"
                >
                    Experience
                </section>

                <section
                    id="skills"
                    className="h-screen scroll-mt-[var(--header-height)]"
                >
                    Skills
                </section>

                <section
                    id="projects"
                    className="h-screen scroll-mt-[var(--header-height)]"
                >
                    Projects
                </section>

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