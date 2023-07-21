
export default function ImagemAleatoria(){

const url = 'https://source.unsplash.com/featured/300*300?'

let pesquisa: string = ''
function urlImagem(){
    return `${url}${pesquisa}`
}

    function renderizarBotao(valor:string){
        return (
            <button className="botao" onClick={() => {
                pesquisa = valor
                console.log(urlImagem())
            
            }}>
                {valor}
            </button>
        )
    }
    return (
        <div className="vai">
            {renderizarBotao('abstract')}
            {renderizarBotao('city')}
            {renderizarBotao('person')}
        </div>
    )
}