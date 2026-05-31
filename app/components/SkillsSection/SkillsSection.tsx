import Skills from "@/app/components/SkillsSection/Skills/Skills";
import {FRONTEND, BACKEND, TOOLS_AND_CRAFT} from "@/app/constants/constants";
import SectionNumber from "@/app/components/Parts/SectionNumber/SectionNumber";
import SectionHeaderV1 from "@/app/components/Parts/SectionHeading/SectionHeaderV1";

const SkillsSection = () => {

    return (
        <section
            id="skills"
            className="min-h-screen bg-card pt-[var(--header-height)]"
        >
            <div className="flex flex-col gap-10 lg:gap-16 min-h-screen pt-0 lg:pt-6 pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                {/* HEADING */}
                <div className="flex flex-col gap-5 lg:gap-8">
                    <SectionNumber number={"03"} title={"Skills"} />

                    <SectionHeaderV1 title1={"The instruments of the"} title2={"trade"} />
                </div>

                <div className="">

                    {/* FRONTEND SKILLS */}
                    <Skills title={"Frontend"} skills={FRONTEND}/>

                    {/* BACKEND SKILLS*/}
                    <Skills title={"Backend"} skills={BACKEND}/>

                    {/* TOOLS & CRAFT SKILLS*/}
                    <Skills title={"Tools & Craft Skills"} skills={TOOLS_AND_CRAFT}/>



                </div>


            </div>
        </section>
    )
}

export default SkillsSection