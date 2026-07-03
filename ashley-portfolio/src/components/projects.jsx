const projects = [
{
    emoji:"📌",
    title: "Business Centre Dashboard",
    desc: "Room booking, amenity tracking and billing for a coworking space inspired by my previous experience as a receptionist",
    tags: ["React", "Javascript"],
    github: "#",
    demo: "#",
},
{
    emoji:"📱",
    title: "Device Troubleshooter",
    desc: "Interactive decision-tree tool for common device issues, built from my knowledge gained through previous rolls",
    tags: ["React", "Tailwind", "SQL", "Python"],
    github: "#",
    demo: "#",
},
{
    emoji:"☁️",
    title: "Cloud Cost Calculator",
    desc: "AWS and Azure infrastructure cost estimator to demonstrate knowledge aquired through gaining my certifications",
    tags: ["React", "Tailwind", "AWS", "Azure"],
    github: "#",
    demo: "#",
},
{
    emoji:"💻",
    title: "This portfolio",
    desc: "This portfolio built with React and Tailwind, deployed on Netifly.",
    tags: ["React", "Tailwind", "AWS", "Azure"],
    github: "#",
    demo: "#",
}
// aditional projects can be added here!
]

export default function Projects() {
    return (
            <section id="projects" className="max-w-5xl mx-auto px-10 py-16">
                <div className="grid grid-cols-2 gap-3">
                    {projects.map((p)=>(
                        <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6
                         hover:-translate-y-1 transition-transform">
                        <div className="text-4xl mb-3">{p.emoji}</div>
                        <h3 className="font-serif text-1g font-bold mb-2">{p.title}</h3>
                        <p className="text-sm text-maroon-400 mb-4">{p.desc}</p>
                        <div className="flex flex-wrap gap-2"> {p.tags.map(tag=>(
                                       <span key={tag} className="text-xs font-semibold px-2 py-1 rounded-full bg-berry text-white mb-4">{tag}</span>
                        ))}
                        </div>
                        </div>
                    ))}
                </div>
            </section>
     )
}
