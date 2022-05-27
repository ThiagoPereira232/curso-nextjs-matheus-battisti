import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Comment() {
    const router = useRouter()

    const todoId = router.query.todoid
    const commentId = router.query.commentid

    return (
        <>
            <Link href={`/todos/${todoId}`}><a>Voltar</a></Link>
            <h1>Exibindo o comentário: {commentId}</h1>
        </>
    )
}