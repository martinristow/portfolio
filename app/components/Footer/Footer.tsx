const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card-secondary border-t border-secondary">
            <div
                className="
                    max-w-6xl mx-auto
                    px-4 sm:px-6
                    py-5
                    flex flex-col items-center justify-center
                    gap-2 sm:gap-3
                    text-center lg:flex-row lg:justify-between lg:text-left
                    font-serif
                "
            >
                <h2 className="text-sm sm:text-base lg:text-lg">
                    &copy; {currentYear} Martin Ristov
                </h2>

                <h3
                    className="
                        uppercase
                        tracking-[0.2em]
                        text-[10px] sm:text-xs lg:text-sm
                        text-muted-foreground
                    "
                >
                    Crafted with care · Made in Sveti Nikole
                </h3>
            </div>
        </footer>
    );
};

export default Footer;