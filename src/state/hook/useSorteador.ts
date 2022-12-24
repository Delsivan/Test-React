import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"
import { useListaDePessoas } from "./useListaDePessoas"


export const useSorteador = () => {
    const pessoas = useListaDePessoas()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)
    return () => {
       const resultado = realizarSorteio(pessoas)
        setResultado(resultado)       
    }
}