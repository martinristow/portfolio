import SectionNumber from "@/app/components/Parts/SectionNumber/SectionNumber";

const ExperienceSection = () => {

    return (
        <section
            id="experience"
            className="min-h-screen bg-card-secondary pt-[var(--header-height)]"
        >
            <div className="flex flex-col gap-10 lg:gap-16 min-h-screen pt-0 lg:pt-6 pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                {/* HEADING */}
                <div className="flex flex-col gap-5 lg:gap-8">
                    <SectionNumber number={"02"} title={"Experience"}/>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-normal font-serif">
                        A short, deliberate{" "}
                        <span className="italic tracking-normal text-accent">chronology.</span>
                    </h1>
                </div>

                {/* WORK */}
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[10rem_1fr] lg:gap-10">
                    <h3 className="uppercase tracking-widest text-sm">Work</h3>

                    <div className="flex flex-col gap-6 border-l border-accent/40 px-6 lg:px-10">

                        {/* Company */}
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-3xl lg:text-4xl">Pixyle.ai</h2>
                            <h4 className="uppercase tracking-widest text-xs">Full-time · 1 yr 1 mo</h4>
                        </div>

                        <hr className="border-accent/40" />

                        {/* Roles */}
                        <div className="flex flex-col gap-6 lg:gap-8">

                            <div className="flex flex-col gap-2 lg:grid lg:grid-cols-[12rem_1fr] lg:gap-10">
                                <div>
                                    <div className="flex items-center gap-4 -ml-[1.85rem] lg:-ml-[2.85rem] mb-1">
                                        <span className="bg-accent w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full shrink-0"></span>
                                        <h3 className="text-base lg:text-lg">Frontend Developer</h3>
                                    </div>
                                    {/*<h5 className="text-sm uppercase">Nov 2025 — Present · 7 mos</h5>*/}
                                    <h5 className="text-xs uppercase tracking-widest mt-1">Nov 2025 — Present · 7 mos</h5>
                                </div>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Building and refining the user-facing surfaces of an AI visual platform — focused on
                                    polished UI, performance, and consistent design language.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 lg:grid lg:grid-cols-[12rem_1fr] lg:gap-10">
                                <div>
                                    <div className="flex items-center gap-4 -ml-[1.85rem] lg:-ml-[2.85rem] mb-1">
                                        <span className="bg-accent w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full shrink-0"></span>
                                        <h3 className="text-base lg:text-lg">Frontend Developer Intern</h3>
                                    </div>
                                    <h5 className="text-sm uppercase">May 2025 — Nov 2025 · 7 mos</h5>
                                </div>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Shipped components, dashboards, and product flows alongside the
                                    engineering team while learning production-grade React and TypeScript practices.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* EDUCATION */}
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[10rem_1fr] lg:gap-10">
                    <h3 className="uppercase tracking-widest text-sm">Education</h3>

                    <div className="flex flex-col gap-6 px-6 lg:px-10">

                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4 -ml-[1.85rem] lg:-ml-[2.85rem]">
                                <span className="bg-card-secondary border border-accent w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full shrink-0"></span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl">University "Goce Delcev" — Stip</h2>
                            </div>
                            <h4 className="uppercase text-sm shrink-0 pl-8 sm:pl-0">Sep 2021 — 2025</h4>
                        </div>

                        <p className="text-base">Bachelor of Science · Computer Science</p>

                        <hr className="border-accent/40" />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExperienceSection;