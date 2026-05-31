import SectionNumber from "@/app/components/Parts/SectionNumber/SectionNumber";

const ProjectsSection = () => {

    return (
        <section
            id="projects"
            className="min-h-screen bg-card-secondary pt-[var(--header-height)]"
        >
            <div className="flex flex-col gap-10 lg:gap-16 min-h-screen pt-0 lg:pt-6 pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                {/* HEADING */}
                <div className="flex flex-col gap-5 lg:gap-8">
                    <SectionNumber number={"04"} title={"Selected Work"} />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-normal font-serif">
                            A small archive of
                        </h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-normal font-serif italic tracking-normal text-accent">favored work.</h1>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default ProjectsSection;