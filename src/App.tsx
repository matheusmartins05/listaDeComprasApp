import { useRecoilState } from "recoil";
import Forms from "./components/Forms";
import SectionItens from "./components/SectionItens";
import Titulo from "./components/Titulo";
import { listaDeItens } from "./atoms/states";
import IItem from "./interfaces/IItem";

function App() {
  const [listaDosItensInseridos, setListaDosItensInseridos] = useRecoilState(listaDeItens);
  function aoAdicionarItem(item: IItem) {
    setListaDosItensInseridos([...listaDosItensInseridos, item]);
    console.log(listaDosItensInseridos)
  }

  return (
    <>
        <header className="bg-[url('/banner.png')] h-32 mx-auto flex items-center">
          <Titulo>
            <h1 className="text-white ml-6 text-xl">Lista de Compras</h1>
          </Titulo>
        </header>

        <Forms informacoesDoItemCadastrado={(item) => aoAdicionarItem(item)} />
        <SectionItens />
    </>
  );
}

export default App;
