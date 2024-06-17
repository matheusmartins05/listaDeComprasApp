import { ReactNode } from "react";

interface InputProps{
    children: ReactNode
    borderRadius: string
    valorDigitadoState: string | number
    valorDigitado: (newState: string) => void
    typeInput: string
}

export default function TextField({children, borderRadius, valorDigitado, valorDigitadoState, typeInput} : InputProps) {

  function aoDigitarValores(event: React.ChangeEvent<HTMLInputElement>){
      valorDigitado(event.target.value);
  };
  

  return (
    <div className="flex gap-1 flex-col ">
      <label className="text-gray-400">{children}</label>
      <input value={valorDigitadoState} onChange={(event) => aoDigitarValores(event)} className={`bg-transparent border 
         border-gray-500 ${borderRadius} h-10 indent-2 focus:outline outline-[#A881E6]`} type={typeInput}/>
    </div>
  );
}
