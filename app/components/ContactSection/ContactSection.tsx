'use client'

import { useRef } from 'react'

const ContactSection = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const handleSend = () => {
        const name = nameRef.current?.value || ''
        const email = emailRef.current?.value || ''
        const message = messageRef.current?.value || ''

        window.location.href =
            `mailto:martinristov084@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`
    }

    return (
        <section
            id="contact"
            className="bg-card-secondary pt-[var(--header-height)]"
        >
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 pt-6 pb-16 max-w-6xl mx-auto px-6 font-serif">

                {/* HEADING */}
                <div className="flex flex-col gap-5 lg:gap-10 flex-shrink-0 lg:max-w-md">

                    <div className="flex items-center gap-2">
                        <h5 className="uppercase tracking-widest text-xl leading-none">
                            05
                        </h5>

                        <div className="flex items-center gap-2">
                            <span className="block w-6 md:w-10 h-0.5 bg-accent self-center"></span>

                            <h3 className="uppercase tracking-widest leading-none">
                                Contact
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-normal font-serif">
                            Let's create
                            <br />
                            something
                        </h1>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-normal font-serif italic text-accent">
                            timeless.
                        </h1>
                    </div>

                    <p className="max-w-md text-xl">
                        Open to thoughtful collaborations, considered products,
                        and the occasional quiet conversation about craft.
                    </p>

                    <div className="flex flex-col space-y-4">

                        <a
                            href="mailto:martinristov084@gmail.com"
                            className="flex items-center justify-between gap-4 w-full border-b hover:border-accent py-2"
                        >
                            <h2 className="text-base lg:text-lg tracking-widest uppercase text-black">
                                Email
                            </h2>

                            <h4 className="text-base lg:text-lg tracking-widest text-black">
                                martinristov084@gmail.com
                            </h4>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/martin-ristov-69a0a729a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-4 w-full border-b hover:border-accent py-2"
                        >
                            <h2 className="text-base lg:text-lg tracking-widest uppercase text-black">
                                Linkedin
                            </h2>

                            <h4 className="text-base lg:text-lg tracking-widest text-black">
                                /in/martinristov
                            </h4>
                        </a>

                        <a
                            href="https://github.com/martinristow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-4 w-full border-b hover:border-accent py-2"
                        >
                            <h2 className="text-base lg:text-lg tracking-widest uppercase text-black">
                                Github
                            </h2>

                            <h4 className="text-base lg:text-lg tracking-widest text-black">
                                @martinristow
                            </h4>
                        </a>

                    </div>
</div>

    {/* FORM */}
    <form className="flex flex-col flex-1 space-y-6 p-6 lg:p-8 border border-gray-500">

        <div className="flex flex-col gap-3">
            <label
                htmlFor="name"
                className="text-base lg:text-lg tracking-widest uppercase text-gray-500"
            >
                Name
            </label>

            <input
                ref={nameRef}
                type="text"
                id="name"
                placeholder="Your name"
                className="bg-transparent border-b border-gray-300 pb-2 placeholder-gray-400 outline-none focus:border-gray-500"
            />
        </div>

        <div className="flex flex-col gap-3">
            <label
                htmlFor="email"
                className="text-base lg:text-lg tracking-widest uppercase text-gray-500"
            >
                Email
            </label>

            <input
                ref={emailRef}
                type="email"
                id="email"
                placeholder="you@studio.com"
                className="bg-transparent border-b border-gray-300 pb-2 placeholder-gray-400 outline-none focus:border-gray-500"
            />
        </div>

        <div className="flex flex-col flex-1 gap-3">
            <label
                htmlFor="message"
                className="text-base lg:text-lg tracking-widest uppercase text-gray-500"
            >
                Message
            </label>

            <textarea
                ref={messageRef}
                id="message"
                placeholder="Tell me about the project..."
                className="bg-transparent border-b border-gray-300 pb-2 placeholder-gray-400 outline-none focus:border-gray-500 resize-none flex-1 min-h-[120px]"
            />
        </div>

        <button
            type="button"
            onClick={handleSend}
            className="w-full bg-black text-white text-base lg:text-lg tracking-widest uppercase py-4 transition-colors"
        >
            Send Message →
        </button>

    </form>
</div>
</section>
)
}

export default ContactSection