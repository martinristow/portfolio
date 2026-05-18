import {useEffect, useState} from "react";

export const useHeader = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 5);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)

    }, []);

    const headerClass = `${
        scrolled
            ? "bg-card/40 backdrop-blur-md border-b border-secondary"
            : "bg-card"
    }`

    return { headerClass };
}