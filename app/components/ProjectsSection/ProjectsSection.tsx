import SectionNumber from "@/app/components/Parts/SectionNumber/SectionNumber";
import SectionHeading from "@/app/components/Parts/SectionHeading/SectionHeading";

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
                    <SectionHeading title1={"A small archive of"} title3={"favored work"}/>
                </div>



            </div>
        </section>
    )
}

export default ProjectsSection;