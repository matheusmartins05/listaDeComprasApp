import { useState } from "react";
import categorias from "./categorias.json";
import { useRecoilState } from "recoil";
import {iconeItens, unidadeDeMedida } from "../atoms/states";
import iconArrow from "/IconArrow.svg"


export default function SelectCategoria() {
  const [, setUrlIconeItem] = useRecoilState(iconeItens);
  const [unidadeDeMedidaEscolhida, setUnidadeDeMedidaEscolhida] = useRecoilState(unidadeDeMedida);
  const unidadesDeMedidas = ['UN.', 'L', 'KG']


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
    setUnidadeDeMedidaEscolhida(categoria)
    categorias.map((element) =>{
      if (element.nome === categoria) {
        setUrlIconeItem(element.tag)
    
      }
    })

    setMostarOpcoes("hidden")
  }

  return (

    <div onClick={exibirOpcoesCategoria} className={`w-[20%] relative px-3 h-10 rounded-e-md ${outlineCategoria} cursor-pointer border-[#252529] flex ${unidadeDeMedidaEscolhida === '' ? 'justify-end' : 'justify-between'} items-center text-white border`}>

      {unidadeDeMedidaEscolhida} <img className="" src={iconArrow} alt="" />
      
      <ul  className={`border border-[#252529] bg-transparent absolute top-14 flex flex-col w-14 left-0 ${mostarOpcoes} rounded-md text-gray-300`}>
      
        {unidadesDeMedidas.map((unidadeMedida) => (
          <li
            onClick={() => recebeValorSelecionado(unidadeMedida)}
            className={`bg-[#171719] cursor-pointer flex gap-4 p-2 border-b border-b-[#252529] hover:bg-[#252529]`}
          >
            {unidadeMedida}
          </li>
        ))}
      </ul>
      </div>

  );
}
