
import { useRecoilState } from "recoil";
import Forms from "./components/Forms";
import SectionItens from "./components/SectionItens";
import Titulo from "./components/Titulo";
import { opcoesDropdownCategoria, opcoesDropdownMedidas, outlineDaCategoria, outlineDaMedida } from "./atoms/states";

function App() {
  const [ mostarOpcoes, setMostarOpcoes] = useRecoilState(opcoesDropdownCategoria)
  const [ , setOutlineMedida] = useRecoilState(outlineDaMedida)
  const [ mostarOpcoesMedidas, setMostarOpcoesMedidas] = useRecoilState(opcoesDropdownMedidas)
  const [, setOutlineCategoria] = useRecoilState(outlineDaCategoria)




  function fecharOpcoesDropdown (){
    if (mostarOpcoesMedidas === "flex") {
      setMostarOpcoesMedidas("hidden")
      setOutlineMedida("border-[#252529]")


    }

    if (mostarOpcoes === "flex") {
      setMostarOpcoes("hidden")
      setOutlineCategoria("border-[#252529]")
    }}

   


  return (

    
    < div onClick={fecharOpcoesDropdown}>
        <header className="bg-[url('/banner.png')] h-32 mx-auto flex items-center">
          <Titulo>
            <h1 className="text-white ml-6 text-xl">Lista de Compras</h1>
          </Titulo>
        </header>

        <Forms/>
        <SectionItens />
    </div>
  );
}

export default App;
