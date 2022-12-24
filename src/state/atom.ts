import { atom } from "recoil";

export const listaPessoasState = atom<string[]>({
    key: 'listaPessoasState',
    default: []
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})