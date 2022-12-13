import { atom } from "recoil";

export const listaPessoasState = atom<string[]>({
    key: 'listaPessoasState',
    default: []
})