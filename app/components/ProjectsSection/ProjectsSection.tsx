const ProjectsSection = () => {

    return (
        <section
            id="projects"
            className="min-h-screen bg-card-secondary pt-[var(--header-height)]"
        >
            <div className="flex flex-col gap-10 lg:gap-16 min-h-screen pt-0 lg:pt-6 pb-[var(--header-height)] max-w-6xl mx-auto px-6 font-serif">

                {/* HEADING */}
                <div className="flex flex-col gap-5 lg:gap-8">
                    <div className="flex items-center gap-2">
                        <h5 className="uppercase tracking-widest text-xl leading-none">04</h5>
                        <div className="flex items-center gap-2">
                            <span className="block w-6 md:w-10 h-0.5 bg-accent self-center"></span>
                            <h3 className="uppercase tracking-widest leading-none">Selected Work</h3>
                        </div>
                    </div>
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