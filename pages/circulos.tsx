import Circulo from "../components/Circulo";

export default function PaginaCirculos() {
    return (
    <div className="flex justify-around h-screen items-center">
      <Circulo texto="Circ #1" />
      <Circulo texto="Circ #2" ohneyma/>
      <Circulo texto="Circ #3"/>
    </div>
  );
}