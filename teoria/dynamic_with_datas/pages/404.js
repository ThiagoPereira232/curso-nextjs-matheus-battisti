import Link from 'next/link'

export default function NotFound(){
    return (
        <>
            <h1>Página não encontrada</h1>
            <Link href="/"><a>Voltar para a página inicial</a></Link>
        </>
    )
}