export default function Evento(){
    let contador=0;
    function incrementar (){
        contador++;
        console.log(contador)
    }
    return (
        <button onClick={incrementar} className="h-32 w-32 rounded-sm bg-zinc-500 flex justify-center items-center text-xl">
                Evento
        </button>
    )
}