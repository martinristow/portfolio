const Skills = ({title, skills}: {title: string, skills: string[]}) => {

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="md:min-w-[300px]">
                    <h2 className="relative inline-block w-fit uppercase tracking-widest after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-1/2 after:bg-accent after:content-['']">
                        {title}
                    </h2>
                </div>

                <ul className="flex flex-wrap gap-3">
                    {skills.map((item: string) => (
                        <li key={item} className="px-4 py-3 text-black flex items-center gap-2 border border-accent/50 hover:border-accent">
                            <span className="w-1 h-1 rounded-full bg-accent inline-block"/>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="border-accent/40 mt-6 mb-6 md:mt-8 md:mb-8"/>
        </>
    )
}

export default Skills