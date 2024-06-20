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
      className="rounded-e-md h-10 border bg-transparent text-gray-500 border-[#252529]"
    >
      <option value=""></option>
      <option value="UN.">UN.</option>
      <option value="L">L</option>
      <option value="KG">KG</option>
    </select>
  );
}
