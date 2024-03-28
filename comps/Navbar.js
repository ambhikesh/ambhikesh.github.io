import Link from "next/link";
const Navbar = () => {
    return(
        <nav className="font-mono text-2xl">
            <div className="logo ml-2 ">
            <Link href="/">Ambhikesh</Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="https://raw.githubusercontent.com/ambhikesh/ambhikesh.github.io/main/public/Ambhikesh.pdf">Resume</Link>
        </nav>
    );
}

export default Navbar;