import { useRecoilValue } from "recoil"
import { listaPessoasState } from "../atom"

export const useListaDePessoas = () => {
    return useRecoilValue(listaPessoasState)
}