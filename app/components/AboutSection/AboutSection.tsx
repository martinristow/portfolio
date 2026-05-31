import SectionNumber from "@/app/components/Parts/SectionNumber/SectionNumber";
import SectionHeading from "@/app/components/Parts/SectionHeading/SectionHeading";
import SectionBio from "@/app/components/Parts/SectionBio/SectionBio";
import {ABOUT_SECTION_BIO, STAT_ITEM} from "@/app/constants/constants";
import StatItem from "@/app/components/Parts/StatItem/StatItem";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-card pt-[var(--header-height)]"
        >
            <div
                className="flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-10 lg:gap-6 min-h-screen pt-0 lg:pt-6 pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                <div className="flex flex-col gap-5 lg:gap-8">

                    <SectionNumber number={"01"} title={"About"}/>
                    <SectionHeading title1={"A quiet"}
                                    title2={"obsession with"}
                                    title3={"craft"}/>
                </div>

                <div className="flex flex-col gap-6 max-w-xl">

                    {ABOUT_SECTION_BIO.map(({id, text}) => (
                        <SectionBio key={id} text={text}/>
                    ))
                    }

                    <div className="flex items-center justify-start gap-4 mt-6">
                        {STAT_ITEM.map(({id, title, description}) => (
                            <StatItem key={id} title={title} description={description}/>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;