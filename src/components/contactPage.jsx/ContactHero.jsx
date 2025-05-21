const ContactHero = function() {
    return (
        <section id="hero-section" className="relative mt-[55px] bg-gradient-to-r
        from-[#0f172a] via-[#312e81] to-[#0f172a]
    ">

            <div id="bottom-glow" className="absolute top-20 right-20 size-60 bg-blue-500 rounded-full blur-3xl animate-pulse duration-200 ease-in-out"></div>

            <div className="absolute bottom-10 left-10 size-60 bg-purple-500 rounded-full blur-3xl animate-pulse duration-200 ease-in-out"></div>

            <div className="absolute top-20 left-1/4 size-2 bg-blue-500 rounded-full animate-ping ease-in-out" style={{"animation-duration": "3s"}}></div>

            <div className="absolute top-40 right-20 size-2 bg-purple-500 rounded-full animate-ping ease-in-out" style={{"animation-duration": "3s"}}></div>

            <div className="absolute bottom-20 left-20 size-2 bg-blue-500 rounded-full animate-ping ease-in-out" style={{"animation-duration": "3s"}}></div>

            <div id="hero-conatiner" className="py-20 px-5 md:px-10 relative z-5">
                <div id="left-section" className="*:text-white max-w-2xl mx-auto text-center pb-8">

                    <h1 className="text-4xl sm:text-5xl font-bold leading-[3rem] sm:leading-[4rem]">Get in Touch</h1>

                    <p className="my-5 text-xl">
                        Have questions about our digital services? We're here to help you succeed.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default ContactHero;