import Link from "next/link";

const Navbar = () => {
    return(
        <footer>
                <p>Copyright 2023 Ambhikesh | <Link href="https://old-ambhikesh.vercel.app">Old Portfolio</Link></p>
                <div>
                    <Link href="https://github.com/True-Fox">Github</Link> &nbsp;
                    <Link href="https://www.instagram.com/ambhi_11/">Instagram</Link> &nbsp;
                    <Link href="https://www.linkedin.com/in/shriambhikesh-thorali/">Linkedin</Link>
                </div>
        </footer>
    );
}

export default Navbar;