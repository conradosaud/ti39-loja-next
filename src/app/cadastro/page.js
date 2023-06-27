import Link from "next/link"

export default function Cadastro(){
    return(
        <div>
            <h1> Página de Cadastro </h1>
            <p> Não tem um login ainda? <Link href="/login">Clique aqui</Link>. </p>
            <form>
                <input placeholder="Digite seu nome" />
                <input placeholder="Digite sua email" />
                <input placeholder="Digite sua senha" />
                <button> Salvar </button>
            </form>
        </div>
    )
}