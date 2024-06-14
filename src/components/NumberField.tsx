import { Notify } from "notiflix";
import { ReactNode } from "react";

interface InputProps{
    children: ReactNode
    borderRadius: string
    valorDigitadoState: string | number
    valorDigitado: (newState: string) => void
    typeInput: string
}

export default function NumberField({children, borderRadius, valorDigitado, valorDigitadoState, typeInput} : InputProps) {

  function aoDigitarValores(event: React.ChangeEvent<HTMLInputElement>){
    if (!isNaN(Number(event.target.value))) {
        valorDigitado(event.target.value);
      } else{
        Notify.failure("Este campo permite somente números");
      } 
   
  };
  

  return (
    <div className="flex gap-1 flex-col ">
      <label className="text-gray-400">{children}</label>
      <input value={valorDigitadoState} onChange={(event) => aoDigitarValores(event)} className={`bg-transparent border border-gray-500 ${borderRadius} h-10 outline-none indent-2`} type={typeInput}/>
    </div>
  );
}