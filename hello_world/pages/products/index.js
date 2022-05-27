import Link from 'next/link'
import NavBar from '../../components/NavBar'

export default function Products() {
    return (
        <>
            <NavBar />
            <h1>Produtos</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    )
}