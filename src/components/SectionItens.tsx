import { useRecoilState } from "recoil";
import CardItem from "./CardItem";
import { listaDeItens, opcoesDropdown, outlineDaCategoria } from "../atoms/states";

export default function SectionItens() {
  const [listaDosItensInseridos] = useRecoilState(listaDeItens);
  const [ mostarOpcoes, setMostarOpcoes] = useRecoilState(opcoesDropdown)
  const [ , setOutlineCategoria] = useRecoilState(outlineDaCategoria)


  function fecharOpcoesDropdown (){
    setOutlineCategoria('border-[#A881E6] ')
    if (mostarOpcoes === "flex") {
      
      setMostarOpcoes("hidden")
      setOutlineCategoria("border-[#252529]")
    }}

  return (
    <section onClick={fecharOpcoesDropdown} id="scroll" className="bg-[#0c0c0d] h-80 overflow-auto text-gray-400 w-[100%] py-10 flex flex-col gap-3">
      {listaDosItensInseridos.map((item) => (
        <CardItem 
            key={item.id} 
            {...item}
            />
      ))}
    </section>
  );
}
