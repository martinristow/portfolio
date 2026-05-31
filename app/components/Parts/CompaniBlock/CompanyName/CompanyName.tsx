const CompanyName = ({companyName, date}: CompanyName) => {

    return (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl lg:text-4xl">{companyName}</h2>
            <h4 className="uppercase tracking-widest text-xs">{date}</h4>
        </div>
    )
}

export default CompanyName;