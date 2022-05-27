import Link from "next/link" 
import NavBar from "../components/NavBar"

export default function About() {
    return (
        <>
        <NavBar />
            <h1>About</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    )
}