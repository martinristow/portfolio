"use client"
import {useHeader} from "@/app/hooks/useHeader";
import Navigation from "@/app/components/Header/Menu/Menu";

const Header = () => {
    const {headerClass} = useHeader()

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${headerClass}`}
            style={{height: "var(--header-height)"}}
        >
            <Navigation/>
        </header>
    );
};

export default Header;