import { useRecoilState } from "recoil";
import { unidadeDeMedida } from "../atoms/states";

export default function SelectUnidadeMedida() {
  const [unidadeDeMedidaInserida, setunidadeDeMedidaInserida] =
    useRecoilState(unidadeDeMedida);

  function aoSelecionarOpcao(event: React.ChangeEvent<HTMLSelectElement>) {
    setunidadeDeMedidaInserida(event.target.value)
  }

  return (
    <select
      onChange={aoSelecionarOpcao}
      value={unidadeDeMedidaInserida}
      className={`rounded-e-md h-10 bg-transparent text-gray-500 border border-[#252529] focus:outline-[#A881E6] focus:outline }`}
    >
      <option className="bg-[#171719] hover:bg-white" value=""></option>
      <option className="bg-[#171719]" value="UN.">UN.</option>
      <option className="bg-[#171719]" value="L">L</option>
      <option className="bg-[#171719]" value="KG">KG</option>
    </select>
  );
}
