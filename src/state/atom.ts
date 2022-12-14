import { atom } from "recoil";

export const listaPessoasState = atom<string[]>({
    key: 'listaPessoasState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})