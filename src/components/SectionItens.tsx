import { useRecoilState } from "recoil";
import CardItem from "./CardItem";
import { listaDeItens } from "../atoms/states";

export default function SectionItens() {
  const [listaDosItensInseridos, setListaDosItensInseridos] = useRecoilState(listaDeItens);

  return (
    <section id="scroll" className="bg-[#0c0c0d] h-80 overflow-auto text-gray-400 w-[100%] py-10 flex flex-col gap-3">
      {listaDosItensInseridos.map((item) => (
        <CardItem 
            key={item.id} 
            {...item}
            />
      ))}
    </section>
  );
}
