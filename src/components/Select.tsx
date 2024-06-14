import { ReactNode } from "react";

interface SelectProps{
  children: ReactNode
  borderRadius: string
  width?: string
  valorSelecionadoState: string
  valorSelecionado: (newState: string) => void
}
export default function Select({children, borderRadius, width, valorSelecionadoState, valorSelecionado} : SelectProps) {

  function aoSelecionarValor(event: React.ChangeEvent<HTMLSelectElement>){
    valorSelecionado(event.target.value)
  }

  return (
    <>
      <select value={valorSelecionadoState} onChange={aoSelecionarValor} className={`h-10 border bg-transparent border-gray-500 ${borderRadius} ${width} text-gray-300 outline-none`}>
        {children}
      </select>
    </>
  );
}
