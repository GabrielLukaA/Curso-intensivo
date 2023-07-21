import ImagemAleatoria from "@/hooks/imagemAleatoria";

export default function PaginaImagens(){
    return(
        <div className={`
        flex  flex-row justify-center h-screen items-center gap-5
        `}>
       <ImagemAleatoria/>
       <ImagemAleatoria/>
       <ImagemAleatoria/>
       </div>
    )
}