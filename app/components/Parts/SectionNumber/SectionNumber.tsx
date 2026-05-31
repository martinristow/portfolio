const SectionNumber = ({number, title}: SectionNumber) => {
    return (
        <div className="flex items-center gap-2">
            <h5 className="uppercase tracking-widest text-xl leading-none">{number}</h5>
            <div className="flex items-center gap-2">
                <span className="block w-6 md:w-10 h-0.5 bg-accent self-center"></span>
                <h3 className="uppercase tracking-widest leading-none">{title}</h3>
            </div>
        </div>
    )
}

export default SectionNumber