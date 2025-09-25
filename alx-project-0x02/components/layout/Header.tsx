import Link from "next/link"
const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1><Link href="/">Alx project-0x02</Link></h1>
            <nav className="space-x-4">
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/post">Post</Link>
            </nav>
        </header>
    )
}

export default Header