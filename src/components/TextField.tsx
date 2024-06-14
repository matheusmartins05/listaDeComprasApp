import { ReactNode } from "react";

interface InputProps{
    children: ReactNode
    borderRadius: string
    valorDigitadoState: string | number
    valorDigitado: (newState: string) => void
}

export default function Input({children, borderRadius, valorDigitado, valorDigitadoState} : InputProps) {

  function aoDigitarValores(event: React.ChangeEvent<HTMLInputElement>){
    valorDigitado(event.target.value)
  }

  return (
    <div className="flex gap-1 flex-col ">
      <label className="text-gray-400">{children}</label>
      <input value={valorDigitadoState} onChange={(event) => aoDigitarValores(event)} className={`bg-transparent border border-gray-500 ${borderRadius} h-10 outline-none indent-2`} type="text"/>
    </div>
  );
}
