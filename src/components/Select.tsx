export default function Select() {
  return (
    <>
      <select className="h-10 border bg-transparent border-gray-500 rounded-e-md text-gray-300 outline-none">
        <option selected value=""></option>
        <option value="valor1">Un.</option>
        <option value="valor2">L</option>
        <option value="valor3">KG</option>
      </select>
    </>
  );
}
