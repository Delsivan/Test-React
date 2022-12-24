import React from "react"
import { useNavigate } from "react-router-dom"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"
import { useSorteador } from "../state/hook/useSorteador"

const Rodape = () => {
    const pessoas = useListaDePessoas()

    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }
    
    return (<footer>
        <button disabled={pessoas.length < 5} onClick={iniciar}>Iniciar</button>
    </footer>)
}

export default Rodape