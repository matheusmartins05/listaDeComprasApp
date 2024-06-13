import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

export default function Forms() {



  return (
    <section className="bg-[#0c0c0d] h-96">
      <div className="py-4 w-[90%] mx-auto">
        <Input>Item</Input>
      </div>

      <div className="flex items-end w-[90%] mx-auto">
        <div className="w-[20%]">
          <Input>Quantidade</Input>
        </div>

        <Select/>

        <div className="w-[40%] ml-2">
          <Input>Categoria</Input>
        </div>

        <Button>
          <button className="h-10 w-10 rounded-full bg-[#7450ac] text-white text-3xl flex justify-center ml-3">
            +
          </button>
        </Button>
      </div>
    </section>
  );
}
