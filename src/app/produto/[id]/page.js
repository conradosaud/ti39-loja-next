export default function ProdutoID( props ){
    return(
        <div>
            <h1> PRODUTO </h1>
            <p> Você está consultando um produto de ID: { props.params.id } </p>                       
        </div>
    )
}