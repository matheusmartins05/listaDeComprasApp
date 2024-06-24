import { Notify } from "notiflix";
import { ReactNode } from "react";

interface InputProps{
    children: ReactNode
    borderRadius: string
    valorDigitadoState: string | number
    valorDigitado: (newState: string) => void
    typeInput: string
}

Notify.init({
  width: "300px",
  position: "center-top",
  closeButton: true,
});

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
      <input value={valorDigitadoState} onChange={(event) => aoDigitarValores(event)} className={`bg-transparent mr-1 border border-[#252529] ${borderRadius} h-10 outline-[#A881E6] focus:outline indent-2`} type={typeInput}/>
    </div>
  );
}