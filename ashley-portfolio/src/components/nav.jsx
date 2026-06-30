export default function Nav () {
    return (
            <nav className="flex items-center justify-between px-10 py-5 bg-white border-b 
                border-purple-100 sticky top-0 z-50">
            <span className="font-serif italic text-lg text-purple-900">Ashley Keen</span>
            <ul className="flex gap-7 list-none">
                <li><a href="#about" className="text-sm text-purple-400 hover:text-purple-900 
                    transition-colors">About</a></li>
                <li><a href="#skills" className="text-sm text-purple-400 hover:text-purple-900 
                    transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-sm text-purple-400 hover:text-purple-900 
                    transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-sm text-purple-400 hover:text-purple-900 
                    transition-colors">Contact</a></li>
            
            </ul>
                </nav>

        )

}