import CompanyName from "@/app/components/Parts/CompaniBlock/CompanyName/CompanyName";
import CompanyRoles from "@/app/components/Parts/CompaniBlock/CompanyRoles/CompanyRoles";
import Label from "@/app/components/Parts/Label/Label";

const CompanyBlock = () => {

    return (
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[10rem_1fr] lg:gap-10">
            <Label name={"Work"}/>

            <div className="flex flex-col gap-6 border-l border-accent/40 px-6 lg:px-10">

                {/* Company */}
                <CompanyName companyName={"Pixyle.ai"} date={"Full-time · 1 yr 1 mo"}/>

                <hr className="border-accent/40"/>

                {/* Roles */}
                <div className="flex flex-col gap-6 lg:gap-8">

                    <CompanyRoles date={"Nov 2025 — Present · 7 mos"}
                                  description={"Building and refining the user-facing surfaces of an AI visual platform — focused on\n" +
                                      "                            polished UI, performance, and consistent design language."}
                                  title={"Frontend Developer"}/>


                    <CompanyRoles date={"May 2025 — Nov 2025 · 7 mos"} title={"Frontend Developer Intern"}
                                  description={"                           Shipped components, dashboards, and product flows alongside the\n" +
                                      "                            engineering team while learning production-grade React and TypeScript practices."}/>

                </div>
            </div>

        </div>

    )
}

export default CompanyBlock