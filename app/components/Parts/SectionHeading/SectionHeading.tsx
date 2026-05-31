const SectionHeading = ({title1, title2, title3}: SectionHeading) => {

    return (
        <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl tracking-normal font-serif">{title1} <br />{title2}</h1>
            <h1 className="text-5xl md:text-6xl italic tracking-normal text-accent font-serif">{title3}.</h1>
        </div>
    )
}

export default SectionHeading;