import {MENU} from "@/app/constants/constants";
import MenuList from "@/app/components/Header/Menu/MenuList";

const Menu = () => {
    return (
        <div className="flex items-center justify-between h-full max-w-5xl mx-auto px-6">
            <h3>
                <a href="/" className="text-sm tracking-widest">MARTIN RISTOV</a>
            </h3>
            <ul className="flex items-center gap-8">
                {MENU.map(({name, link}) => (
                    <MenuList key={name} name={name} link={link}/>
                ))}
            </ul>
        </div>
    );
}

export default Menu