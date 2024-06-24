import { useRecoilState } from "recoil";
import IItem from "../interfaces/IItem";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { listaDeItens } from "../atoms/states";

export default function CardItem({
  nome,
  quantidade,
  unidadeDeMedida,
  categoria,
  urlIcon,
  id,
  itemComprado,
}: IItem) {
  const [listaDosItensInseridos, setListaDosItensInseridos] =
    useRecoilState(listaDeItens);

  function excluirItem(item: IItem) {
    setListaDosItensInseridos(
      listaDosItensInseridos.filter(
        (itemAhSerExcluido) => itemAhSerExcluido.id !== item.id
      )
    );
  }

  function marcarComoComprado(item: IItem, event: React.ChangeEvent<HTMLInputElement>){
    const itemRepetido = listaDosItensInseridos.some((item) => item.id === item.id);
    let novaLista = [...listaDosItensInseridos];
    if (event.target.checked) {
      item.itemComprado = "line-through bg-[#111112] border-none";



      if (itemRepetido) {
        novaLista = listaDosItensInseridos.filter((fav) => fav.id !== item.id);
        setListaDosItensInseridos([...novaLista, item]);
        return listaDosItensInseridos;
      }
    }else{
      item.itemComprado = "bg-[#171719] border-[#252529]";
      if (itemRepetido) {
        novaLista = listaDosItensInseridos.filter((fav) => fav.id !== item.id);
        setListaDosItensInseridos([item, ...novaLista]);
        return listaDosItensInseridos;
      }
    }
  }

  return (
    <div className={`flex justify-between items-center w-[90%] sm:w-[100%]  mx-auto border ${itemComprado} rounded-md p-4 `}>
      <input
        type="checkbox"
        onChange={(event) =>
          marcarComoComprado(
            {
              id,
              nome,
              quantidade,
              unidadeDeMedida,
              categoria,
              urlIcon,
              itemComprado
            },
            event
          )
        }
      />

      <div className="w-[40%]">
        <h3 className={`${itemComprado}`}>{nome}</h3>
        <p className={` ${itemComprado} text-sm`}>
          {quantidade} {unidadeDeMedida}
        </p>
      </div>

      <figure className="w-[40%] flex justify-end">
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
            urlIcon,
          })
        }
      >
        <DeleteOutlineOutlinedIcon />
      </button>
    </div>
  );
}
