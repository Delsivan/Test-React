import { useSetRecoilState } from "recoil"
import { listaPessoasState } from "../atom"

export const useAdicionarPessoa = () => {
    const setLista = useSetRecoilState(listaPessoasState)
    return (nomeDaPessoa) => {
        return setLista(listaAtual => [...listaAtual, nomeDaPessoa])
    }
}