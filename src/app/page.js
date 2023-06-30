'use client'
import { useState, useEffect } from 'react';
import { buscaTodos } from '@/model/produtos';

import Link from 'next/link';
import Produto from '@/components/Produto';

export default function Home() {

    const [ produtos, alteraProdutos ] = useState([])

    useEffect( ()=> {
        async function dados(){
            const resposta = await buscaTodos();
            alteraProdutos( resposta.data )
        }
        dados();
    }, [] )

    return (
        <div>
            <h1> Atividades TI 39 </h1>
            <div className="grid grid-cols-3 place-items-center" >

                {
                    produtos == 0 ? <p> Carregando... </p> :
                    produtos.map( produto => 
                        <Link href={ "/produto/" + produto.id } >
                            <Produto produto={produto} largura={150} />
                        </Link>
                    )
                }

            </div>
        </div>
    )
}
