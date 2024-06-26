import { atom } from "recoil";
import IItem from "../interfaces/IItem";

export const item = atom({
    key: "itemDigitado",
    default: ""
})

export const quantidade = atom({
    key: "quantidadeDigitada",
    default: ""
})

export const unidadeDeMedida = atom({
    key: "unidadeDeMedida",
    default: ""
})

export const categoria = atom({
    key: "categoria",
    default: ""
})

export const listaDeItens = atom<IItem[]>({
    key: "listaDeItens",
    default: []
})

export const idItens = atom({
    key: "idItens",
    default: ""
})

export const iconeItens = atom({
    key: "iconeItens",
    default: ""
})

export const foiComprado = atom({
    key: "foiComprado",
    default: "border-[#252529]"
})

export const opcoesDropdownCategoria = atom({
    key: "opcoesDropdownCategoria",
    default: "hidden"
})

export const opcoesDropdownMedidas = atom({
    key: "opcoesDropdownMedidas",
    default: "hidden"
})

export const outlineDaCategoria = atom({
    key: "outlineDaCategoria",
    default: "border-[#252529]"
})

export const outlineDaMedida = atom({
    key: "outlineDaMedida",
    default: "border-[#252529]"
})
