
import Link from 'next/link'

export default function Menu(){
    return(
        <nav>
            <ul>
                <li> <Link href="/">Início</Link> </li>
                <li> <Link href="/carrinho"> Carrinho </Link> </li>
                <li> <Link href="/cadastro">Cadastro</Link> </li>
                <li> <Link href="/login" > Login </Link> </li>
            </ul>
        </nav>
    )
}
