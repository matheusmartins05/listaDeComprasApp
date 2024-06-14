
import { useRecoilState } from "recoil";
import IItem from "../interfaces/IItem";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { listaDeItens } from "../atoms/states";

export default function CardItem( {nome, quantidade, unidadeDeMedida, categoria, urlIcon, id}: IItem) {
  const [listaDosItensInseridos, setListaDosItensInseridos] = useRecoilState(listaDeItens);


function excluirItem(item : IItem){
    setListaDosItensInseridos(listaDosItensInseridos.filter(itemAhSerExcluido => itemAhSerExcluido.id !== item.id))
}

  return (
    <div className="flex justify-between items-center w-[90%] mx-auto border border-gray-700 rounded-md p-4 ">
      <input type="checkbox" />

      <div>
        <h3>{nome}</h3>
        <p className="text-sm">
          {quantidade} {unidadeDeMedida}
        </p>
      </div>

      <figure>
        <img src={urlIcon} alt="" />
      </figure>

      <button
        onClick={() =>
          excluirItem({
              id,
              nome,
              quantidade,
              unidadeDeMedida,
              categoria,
              urlIcon
          })
        }
      >
        <DeleteOutlineOutlinedIcon />
      </button>
    </div>
  );
}
