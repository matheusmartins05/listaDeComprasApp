import { ReactNode } from "react";
import categorias from "./categorias.json";
import { useRecoilState } from "recoil";
import { iconeItens } from "../atoms/states";

interface SelectProps{
  children: ReactNode
  borderRadius: string
  width?: string
  valorSelecionadoState: string
  valorSelecionado: (newState: string) => void
}
export default function Select({children, borderRadius, width, valorSelecionadoState, valorSelecionado} : SelectProps) {
  const [, setUrlIconeItem] = useRecoilState(iconeItens)

  function aoSelecionarValor(event: React.ChangeEvent<HTMLSelectElement>){
    valorSelecionado(event.target.value)
    categorias.filter(element => {
      if (element.nome === event.target.value) {
        setUrlIconeItem(element.icone)
      }
    });
  }

  return (
    <>
      <select value={valorSelecionadoState} onChange={aoSelecionarValor} className={`h-10 border bg-transparent border-gray-500 ${borderRadius} ${width} text-gray-300 outline-none`}>
        {children}
      </select>
    </>
  );
}
