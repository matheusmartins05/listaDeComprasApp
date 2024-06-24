import { ReactNode } from "react"

interface ButtonProps{
    children: ReactNode
}

export default function Button({children} : ButtonProps){
    return(
        <div className="w-[20%] flex justify-end">{children}</div>
    )
}