import SectionNumber from "@/app/components/Parts/SectionNumber/SectionNumber";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-card pt-[var(--header-height)]"
        >
            <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-10 lg:gap-6 min-h-screen pt-0 lg:pt-6 pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                <div className="flex flex-col gap-5 lg:gap-8">

                    <SectionNumber number={"01"} title={"About"}/>

                    <div className="flex flex-col">
                        <h1 className="text-5xl md:text-6xl tracking-normal font-serif">A quiet <br />obsession with</h1>
                        <h1 className="text-5xl md:text-6xl italic tracking-normal text-accent font-serif">craft.</h1>
                    </div>
                </div>

                <div className="flex flex-col gap-6 max-w-xl">
                    <p className="text-2xl lg:text-xl">I'm Martin — a frontend developer who believes the web deserves the same care as a hand-stitched garment. My focus is on building modern, scalable, and elegant applications where every interaction feels considered.</p>
                    <p className="text-2xl lg:text-xl">Working primarily with React, Next.js, and TypeScript, I shape interfaces that pair clarity with personality. I treat typography as architecture, motion as punctuation, and whitespace as the most generous design choice you can make.</p>
                    <p className="text-2xl lg:text-xl">Currently shaping product experiences at Pixyle.ai, while continuing to study what makes a product feel timeless rather than merely new.</p>

                    <div className="flex items-center justify-start gap-4 mt-6">
                        <div>
                            <h2 className="text-2xl font-semibold">4+</h2>
                            <p className="uppercase tracking-widest text-md">Years writing code</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">30+</h2>
                            <p className="uppercase tracking-widest text-md">Interfaces shipped</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">∞</h2>
                            <p className="uppercase tracking-widest text-md">Details obsessed over</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;