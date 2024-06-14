import Input from "./TextField";
import Button from "./Button";
import Select from "./Select";
import { useRecoilState } from "recoil";
import { categoria, idItens, item, quantidade, unidadeDeMedida } from "../atoms/states";
import categorias from "./categorias.json";
import IItem from "../interfaces/IItem";
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps{
  informacoesDoItemCadastrado: (item: IItem) => void
}


export default function Forms({informacoesDoItemCadastrado} : FormularioProps) {
  const [itemInserido, setItemInserido] = useRecoilState(item);
  const [quantidadeInserida, setquantidadeInserida] = useRecoilState(quantidade);
  const [unidadeDeMedidaInserida, setunidadeDeMedidaInserida] = useRecoilState(unidadeDeMedida);
  const [categoriaInserida, setcategoriaInserida] = useRecoilState(categoria);
  const [id, setId] = useRecoilState(idItens)

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    setId(uuidv4())
    informacoesDoItemCadastrado({
      nome: itemInserido,
      quantidade: quantidadeInserida,
      unidadeDeMedida: unidadeDeMedidaInserida,
      categoria: categoriaInserida,
      id: id
    }) 

 
  }

  return (
    <form onSubmit={onSubmitForm} className="bg-[#0c0c0d]">
      <div className="py-4 w-[90%] mx-auto text-white">
        <Input
          valorDigitadoState={itemInserido}
          valorDigitado={setItemInserido}
          borderRadius="rounded-md"
        >
          Item
        </Input>
      </div>

      <div className="flex items-end w-[90%] mx-auto">
        <div className="w-[20%] text-white">
          <Input
            valorDigitadoState={quantidadeInserida}
            valorDigitado={setquantidadeInserida}
            borderRadius="rounded-s-md"
          >
            Quantidade
          </Input>
        </div>

        <Select  valorSelecionadoState={unidadeDeMedidaInserida} valorSelecionado={setunidadeDeMedidaInserida} borderRadius="rounded-e-md">
          <option value=""></option>
          <option value="Unidade">UN.</option>
          <option value="Litro">L</option>
          <option value="Kilo">KG</option>
        </Select>

        <div className="w-[40%] ml-2 text-white">
          <Select valorSelecionadoState={categoriaInserida} valorSelecionado={setcategoriaInserida} width="w-[100%]" borderRadius="rounded-md">
            {categorias.map((categoria) => (
              <option key={categoria.id}>{categoria.nome}</option>
            ))}
          </Select>
        </div>

        <Button>
          <button
            type="submit"
            className="h-10 w-10 rounded-full bg-[#7450ac] text-white text-3xl flex justify-center ml-3"
          >
            +
          </button>
        </Button>
      </div>
    </form>
  );
}
