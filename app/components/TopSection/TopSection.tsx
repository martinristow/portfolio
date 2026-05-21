import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const TopSection = () => {
    return (
        <section
            id="top"
            className="min-h-screen bg-card pt-[var(--header-height)]"
        >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 min-h-screen pt-0 lg:pt-6  pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                <div className="flex flex-col gap-5 lg:gap-10">
                    {/*<h5 className="uppercase tracking-widest text-sm">Portfolio <span className="text-accent font-semibold">— MMXXVI</span></h5>*/}
                    <div className="flex flex-col">
                        <h1 className="text-7xl md:text-9xl tracking-normal font-serif">Martin</h1>
                        <h1 className="text-7xl md:text-9xl italic tracking-normal text-accent font-serif">Ristov</h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="block w-12 md:w-16 h-0.5 bg-accent"></span>
                        <h3 className="uppercase tracking-widest">Software Engineer</h3>
                    </div>

                    <p className="block lg:w-140 text-xl font-extralight">
                        Crafting modern web experiences with the patience of an old-world tailor and the precision of a
                        modern engineer — one detail at a time.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 tracking-widest">
                        <a href="#projects" className="flex items-center justify-center gap-2 uppercase py-2.5 px-8 cursor-pointer bg-accent text-white font-bold">
                            <p>View Projects</p>
                            <FaArrowRight className="h-4 w-4" />
                        </a>
                        <button className="uppercase py-2.5 px-8 cursor-pointer text-black border border-black/30">Contact Me</button>
                    </div>

                </div>


                <Image
                    src="/images/martinristov.png"
                    alt="Martin Ristov"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className="rounded-2xl shadow-2xl w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[400px] h-auto border border-secondary"
                />
            </div>

        </section>
    )
}

export default TopSection