const CompanyRoles = ({title, date, description}: CompanyRoles) => {

    return (
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-[12rem_1fr] lg:gap-10">
            <div>
                <div className="flex items-center gap-4 -ml-[1.85rem] lg:-ml-[2.85rem] mb-1">
                    <span className="bg-accent w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full shrink-0"></span>
                    <h3 className="text-base lg:text-lg">{title}</h3>
                </div>
                <h5 className="text-xs uppercase tracking-widest mt-1">{date}</h5>
            </div>
            <p className="text-base lg:text-lg leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default CompanyRoles