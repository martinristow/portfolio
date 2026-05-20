import {MENU} from "@/app/constants/constants";
import MenuList from "@/app/components/Header/Menu/MenuList";
import {useState} from "react";
import {CiMenuBurger} from "react-icons/ci";
import {RxCross1} from "react-icons/rx";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex items-center justify-between h-full max-w-6xl mx-auto px-6">
            <h3>
                <a href="/" className="text-sm tracking-widest">MARTIN RISTOV</a>
            </h3>
            <ul className="hidden md:flex items-center gap-8">
                {MENU.map(({name, link}) => (
                    <MenuList key={name} name={name} link={link}/>
                ))}
            </ul>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                aria-label="Toggle Menu"
            >
                {isOpen ? <RxCross1 size={22}/> : <CiMenuBurger size={22}/>}
            </button>

            <div
                className={`absolute top-full left-0 w-full transition-all duration-300 overflow-hidden md:hidden ${
                    isOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-6 py-8 backdrop-blur-xl bg-background/90 border-b border-border">
                    {MENU.map(({name, link}) => (
                        <li key={name}>
                            <a
                                href={link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsOpen(false);
                                    setTimeout(() => {
                                        document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
                                    }, 300);
                                }}
                                className="text-sm tracking-[0.25em]"
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navigation