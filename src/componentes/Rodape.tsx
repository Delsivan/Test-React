import React from "react"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"

const Rodape = () => {
    const pessoas = useListaDePessoas()
    
    return (<footer>
        <button disabled={pessoas.length < 5}>Iniciar</button>
    </footer>)
}

export default Rodape