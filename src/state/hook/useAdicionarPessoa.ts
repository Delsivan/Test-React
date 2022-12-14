import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaPessoasState } from "../atom"

export const useAdicionarPessoa = () => {
    const setLista = useSetRecoilState(listaPessoasState)
    const lista = useRecoilValue(listaPessoasState)
    const setErro = useSetRecoilState(erroState)
    return (nomeDaPessoa: string) => {
        if (lista.includes(nomeDaPessoa)) {
            setErro('Nome já está cadastrado na lista!')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDaPessoa])
    }
}