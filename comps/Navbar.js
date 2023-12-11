import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return(
        <nav>
            <div className="logo ml-2 ">
            <Link href="/">Ambhikesh</Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
        </nav>
    );
}

export default Navbar;