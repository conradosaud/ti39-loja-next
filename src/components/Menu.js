
import Link from 'next/link'

export default function Menu(){
    // background: cyan
    // color: white
    return(
        <div>
            <h1 className="bg-sky-500 text-white p-3 text-center font-bold" > Conradito Store </h1>
            <nav className="bg-sky-600 text-white p-5 text-base " >
                <ul className="flex gap-10 justify-center " >
                    <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all " > <Link href="/">Início</Link> </li>
                    <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all " > <Link href="/carrinho"> Carrinho </Link> </li>
                    <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all " > <Link href="/cadastro">Cadastro</Link> </li>
                    <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all " > <Link href="/login" > Login </Link> </li>
                </ul>
            </nav>
        </div>
    )
}
