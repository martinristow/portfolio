const MenuList = ({name, link}: { name: string, link: string }) => {

    return (
        <li key={name}>
            <a
                className="text-md tracking-widest relative after:absolute after:top-6 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                href={link}
            >
                {name}
            </a>
        </li>
    )
}

export default MenuList;