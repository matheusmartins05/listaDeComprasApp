import TextField from "./TextField";
import Button from "./Button";
import Select from "./Select";
import { useRecoilState } from "recoil";
import {
  categoria,
  iconeItens,
  idItens,
  item,
  listaDeItens,
  quantidade,
  unidadeDeMedida,
} from "../atoms/states";
import categorias from "./categorias.json";
import IItem from "../interfaces/IItem";
import { v4 as uuidv4 } from "uuid";
import Notiflix, { Notify } from "notiflix";
import NumberField from "./NumberField";

export default function Forms() {
  const [itemInserido, setItemInserido] = useRecoilState(item);
  const [quantidadeInserida, setquantidadeInserida] = useRecoilState(quantidade);
  const [unidadeDeMedidaInserida, setunidadeDeMedidaInserida] = useRecoilState(unidadeDeMedida);
  const [categoriaInserida, setcategoriaInserida] = useRecoilState(categoria);
  const [id, setId] = useRecoilState(idItens);
  const [urlIconItem] = useRecoilState(iconeItens);
  const [listaDosItensInseridos, setListaDosItensInseridos] = useRecoilState(listaDeItens);

  Notiflix.Notify.init({
    width: '300px',
    position: 'center-bottom',
    closeButton: false,
    });

  function limpaInputsAoEnviarForms() {
    setItemInserido("");
    setquantidadeInserida("");
    setunidadeDeMedidaInserida("");
    setcategoriaInserida("");
  }

  function adicionaItemAhLista(item: IItem) {
    setListaDosItensInseridos([...listaDosItensInseridos, item]);
  }


  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (itemInserido === "" || quantidadeInserida === "" || unidadeDeMedidaInserida === "" || categoriaInserida === "") {
      Notify.failure("Por favor preencha todos os campos");
    } else {
      setId(uuidv4());
      adicionaItemAhLista({
        nome: itemInserido,
        quantidade: quantidadeInserida,
        unidadeDeMedida: unidadeDeMedidaInserida,
        categoria: categoriaInserida,
        id: id,
        urlIcon: urlIconItem,
      });

      limpaInputsAoEnviarForms();
    }
  }

  return (
    <form onSubmit={onSubmitForm} className="bg-[#0c0c0d]">
      <div className="py-4 w-[90%] mx-auto text-white">
        <TextField
          typeInput="text"
          valorDigitadoState={itemInserido}
          valorDigitado={setItemInserido}
          borderRadius="rounded-md"
        >
          Item
        </TextField>
      </div>

      <div className="flex items-end w-[90%] mx-auto">
        <div className="w-[20%] text-white">
            <NumberField
            typeInput="text"
            valorDigitadoState={quantidadeInserida}
            valorDigitado={setquantidadeInserida}
            borderRadius="rounded-s-md"
          >Quantidade</NumberField>
        </div>

        <Select
          valorSelecionadoState={unidadeDeMedidaInserida}
          valorSelecionado={setunidadeDeMedidaInserida}
          borderRadius="rounded-e-md"
        >
          <option value=""></option>
          <option value="UN.">UN.</option>
          <option value="L">L</option>
          <option value="KG">KG</option>
        </Select>

        <div className="w-[40%] ml-2 text-white">
          <Select
            valorSelecionadoState={categoriaInserida}
            valorSelecionado={setcategoriaInserida}
            width="w-[100%]"
            borderRadius="rounded-md"
          >
            <option value=""></option>
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
