import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return(
        <nav>
            <div className="logo ml-2">
                <h1>Ambhikesh</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
        </nav>
    );
}

export default Navbar;