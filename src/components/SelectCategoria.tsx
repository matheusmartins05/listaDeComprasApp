import { useState } from "react";
import categorias from "./categorias.json";
import { useRecoilState } from "recoil";
import { categoria, iconeItens } from "../atoms/states";
import iconArrow from "/IconArrow.svg"


interface SelectProps {
  borderRadius: string;
  width?: string;
}
export default function SelectCategoria({
  borderRadius,
  width,
}: SelectProps) {
  const [, setUrlIconeItem] = useRecoilState(iconeItens);
  const [categoriaInserida, setcategoriaInserida] = useRecoilState(categoria);


  const [ mostarOpcoes, setMostarOpcoes] = useState("hidden")

  function exibirOpcoesCategoria(){
    if (mostarOpcoes === "hidden") {
      setMostarOpcoes("flex")
    } else {
      setMostarOpcoes("hidden")
    }
  }

  function recebeValorSelecionado(categoria: string){
    setcategoriaInserida(categoria)
    categorias.map((element) =>{
      if (element.nome === categoria) {
        setUrlIconeItem(element.tag)
    
      }
    })

    setMostarOpcoes("hidden")
  }

  return (
    <>
      <ul

        className={`h-10 border bg-transparent border-gray-500 ${borderRadius} ${width} text-gray-300 outline-[#A881E6] focus:outline `}
      >
        <li
          onClick={exibirOpcoesCategoria}
          className="mb-2 mr-2 h-[100%] flex justify-end items-center cursor-pointer"
        >
          {categoriaInserida} <img src={iconArrow} alt="" />
        </li>
        {categorias.map((categoria) => (
          <li
            onClick={() => recebeValorSelecionado(categoria.nome)}
            className={`bg-slate-800 p-1 ${mostarOpcoes} relative border-gray-500 border gap-2 cursor-pointer`}
            key={categoria.id}
          >
            <img className="w-6" src={categoria.icone} alt="" />
            {categoria.nome}
          </li>
        ))}
      </ul>
    </>
  );
}
