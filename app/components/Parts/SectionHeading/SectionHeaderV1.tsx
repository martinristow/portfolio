const SectionHeaderV1 = ({title1, title2}: SectionHeading) => {

    return (
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-normal font-serif">
            {title1}{" "}
            <span className="italic tracking-normal text-accent">{title2}.</span>
        </h1>
    )
}

export default SectionHeaderV1;