import { atom } from "recoil";

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

export const listaDeItens = atom({
    key: "listaDeItens",
    default: []
})