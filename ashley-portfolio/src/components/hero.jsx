export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-10 py-20 bg-apricot" >
            <div className="max-w-3xl text-center"> 
                <p className="text-sm font-semibold text-berry tracking-widest uppercase mb-4">
                    Junior Software Developer ~ Lonon
                </p>
                <h1 className="font-serif text-6xl font-bold text-apricot-900 leading-right mb-6">
                    Hi, I'm Ashley Keen
                </h1>
                <p className="text-lg text-apricot-400 leading-relaxed max-w-xl mx-auto mb-10">
                    I build clean, practical web apps with React, Python and a grounding in cloud
                    infrastructure. Open to in person, hybrid and remote roles.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <a href="#projects" className="px-6 py-3 bg-berry text-white font-bold rounded-full
                    hover:opacity-90 transition-opacity"> See my work
                    </a>
                    <a href="#contact" className="px-6 py-3 border-2 border-berry text-berry font-bold 
                    rounded-full hover:bg-berry hover:text-apricot transition-all"> Get in touch.
                    </a>
                </div>
            </div>
        </section>
    )
}