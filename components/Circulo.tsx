interface ChildrenProps {
  texto: string;
  ohneyma?: boolean;
}
export default function Circulo(props: ChildrenProps) {
  console.log(props);
  return (
    <div className={`
    h-64 w-64 bg-cyan-500 rounded-full 
    ${props.ohneyma ? 'rounded-md': 'rounded-full'}
    `}>
      <p>{props.texto}</p>
    </div>
  );
}
