import Label from "@/app/components/Parts/Label/Label";


const EducationBlock = ({institution, date, degree}: EducationBlockProps) => {

    return (
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[10rem_1fr] lg:gap-10">
            <Label name={"Education"}/>

            <div className="flex flex-col gap-6 px-6 lg:px-10">

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4 -ml-[1.85rem] lg:-ml-[2.85rem]">
                        <span
                            className="bg-card-secondary border border-accent w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full shrink-0"></span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl">{institution}</h2>
                    </div>
                    <h4 className="uppercase text-sm shrink-0 pl-8 sm:pl-0">{date}</h4>
                </div>

                {/* Degree */}
                <p className="text-base">{degree}</p>

                <hr className="border-accent/40"/>

            </div>
        </div>

    )
}

export default EducationBlock