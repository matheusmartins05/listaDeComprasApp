import { useRecoilState } from "recoil";
import CardItem from "./CardItem";
import { listaDeItens} from "../atoms/states";

export default function SectionItens() {
  const [listaDosItensInseridos] = useRecoilState(listaDeItens);


  return (
    <section  className=" overflow-auto text-gray-400 w-[100%] h-[100vh]  sm:w-[60%] mx-auto  ">
      <div  id="scroll" className="overflow-auto h-96 flex flex-col gap-3">
        {listaDosItensInseridos.map((item) => (
          <CardItem
              key={item.id}
              {...item}
              />
        ))}
      </div>
    </section>
  );
}
