
import { useRecoilState } from "recoil";
import IItem from "../interfaces/IItem";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { foiComprado, listaDeItens } from "../atoms/states";


export default function CardItem( {nome, quantidade, unidadeDeMedida, categoria, urlIcon, id}: IItem) {
  const [listaDosItensInseridos, setListaDosItensInseridos] = useRecoilState(listaDeItens);
  const[comprado, setComprado] = useRecoilState(foiComprado)


function excluirItem(item : IItem){
    setListaDosItensInseridos(listaDosItensInseridos.filter(itemAhSerExcluido => itemAhSerExcluido.id !== item.id))
}

function itemComprado(event:  React.ChangeEvent<HTMLInputElement>){
  if(event.target.checked){
    setComprado('line-through')
    console.log(comprado)
  } else{
    setComprado('')

  }
}

  return (
    <div className="flex justify-between items-center w-[90%] mx-auto border border-gray-700 rounded-md p-4 ">
      <input type="checkbox" onChange={itemComprado}/>

      <div className="w-[40%]">
        <h3 className={`${comprado}`}>{nome}</h3>
        <p className={`${comprado} text-sm`}>
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
