import React from "react"
import { useNavigate } from "react-router-dom"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"

const Rodape = () => {
    const pessoas = useListaDePessoas()
    const navegarPara = useNavigate()

    const iniciar = () => {
        navegarPara('/sorteio')
    }
    
    return (<footer>
        <button disabled={pessoas.length < 5} onClick={iniciar}>Iniciar</button>
    </footer>)
}

export default Rodape