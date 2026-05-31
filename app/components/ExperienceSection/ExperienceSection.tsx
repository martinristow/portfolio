import SectionNumber from "@/app/components/Parts/SectionNumber/SectionNumber";
import SectionHeaderV1 from "@/app/components/Parts/SectionHeading/SectionHeaderV1";
import EducationBlock from "@/app/components/Parts/EducationBlock/EducationBlock";
import CompanyBlock from "@/app/components/Parts/CompaniBlock/CompanyBlock";

const ExperienceSection = () => {

    return (
        <section
            id="experience"
            className="min-h-screen bg-card-secondary pt-[var(--header-height)]"
        >
            <div
                className="flex flex-col gap-10 lg:gap-16 min-h-screen pt-0 lg:pt-6 pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                {/* HEADING */}
                <div className="flex flex-col gap-5 lg:gap-8">
                    <SectionNumber
                        number={"02"}
                        title={"Experience"}
                    />
                    <SectionHeaderV1
                        title1={"A short, deliberate"}
                        title2={"chronology"}
                    />
                </div>

                {/* WORK */}
                <CompanyBlock/>

                {/* EDUCATION */}
                <EducationBlock
                    institution='University "Goce Delcev" — Stip'
                    date="Sep 2021 — 2025"
                    degree="Bachelor of Science · Computer Science"
                />

            </div>
        </section>
    )
}

export default ExperienceSection;