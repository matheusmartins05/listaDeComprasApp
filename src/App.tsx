import { RecoilRoot } from "recoil";
import Forms from "./components/Forms";
import SectionItens from "./components/SectionItens";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <RecoilRoot>
        <header className="bg-[url('/banner.png')] h-32 mx-auto flex items-center">
          <Titulo>
            <h1 className="text-white ml-6 text-xl">Lista de Compras</h1>
          </Titulo>
        </header>

        <Forms />
        <SectionItens />
      </RecoilRoot>
    </>
  );
}

export default App;
