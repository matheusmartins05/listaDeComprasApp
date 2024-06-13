import { ReactNode } from "react";

interface InputProps{
    children: ReactNode
}

export default function Input({children} : InputProps) {
  return (
    <div className="flex gap-1 flex-col ">
      <label className="text-gray-400">{children}</label>
      <input className="bg-transparent border border-gray-500 rounded-s-md h-10 outline-none indent-2" type="text"/>
    </div>
  );
}
