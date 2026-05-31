interface MenuProps {
    id: number;
    name: string;
    link: string;
}

interface SectionNumber {
    number: string
    title: string
}

interface SectionHeading {
    title1?: string;
    title2?: string;
    title3?: string;
}

interface StatItemData {
    title: string;
    description: string;
}

interface StatItemProps extends StatItemData{
    id: number;
}

interface EducationBlockProps {
    institution: string;
    date: string;
    degree: string;
}

interface CompanyRoles {
    title: string;
    date: string;
    description: string;
}

interface CompanyName {
    companyName: string;
    date: string;
}