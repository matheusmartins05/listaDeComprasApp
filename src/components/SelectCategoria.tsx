import { useState } from "react";
import categorias from "./categorias.json";
import { useRecoilState } from "recoil";
import { categoria, iconeItens } from "../atoms/states";
import iconArrow from "/IconArrow.svg"


export default function SelectCategoria() {
  const [, setUrlIconeItem] = useRecoilState(iconeItens);
  const [categoriaInserida, setcategoriaInserida] = useRecoilState(categoria);


  const [ mostarOpcoes, setMostarOpcoes] = useState("hidden")
  const [ outlineCategoria, setOutlineCategoria] = useState('border-[#252529] out')

  function exibirOpcoesCategoria(){
    setOutlineCategoria('border-[#A881E6] ')
    if (mostarOpcoes === "hidden") {
      
      setMostarOpcoes("flex")
    } else {
      setMostarOpcoes("hidden")
      setOutlineCategoria("border-[#252529]")
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

    <div onClick={exibirOpcoesCategoria} className={`w-[40%] relative ml-2 px-3 h-10 rounded-md ${outlineCategoria} cursor-pointer border-[#252529] flex ${categoriaInserida === '' ? 'justify-end' : 'justify-between'} items-center text-white border`}>

      {categoriaInserida} <img className="" src={iconArrow} alt="" />
      
      <ul  className={`border border-[#252529] bg-transparent absolute top-14 flex flex-col w-44 left-0 ${mostarOpcoes} rounded-md text-gray-300`}>
      
        {categorias.map((categoria) => (
          <li
            onClick={() => recebeValorSelecionado(categoria.nome)}
            className={`bg-[#171719] cursor-pointer flex gap-4 p-2 border-b border-b-[#252529] hover:bg-[#252529]`}
            key={categoria.id}
          >
            <img className="w-6" src={categoria.icone} alt="" />
            {categoria.nome}
          </li>
        ))}
      </ul>
      </div>

  );
}
