
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

    
    < div className="w-[100%] mx-auto bg-[#0c0c0d]" onClick={fecharOpcoesDropdown}>
        <header className="bg-[url('/banner.png')] h-40 mx-auto flex items-center">
          <div className="sm:w-[60%] mx-auto w-[90%]">
            <Titulo>
              <h1 className="text-white text-xl ">Lista de Compras</h1>
            </Titulo>
          </div>
        </header>

        <Forms/>
        <SectionItens />
    </div>
  );
}

export default App;
