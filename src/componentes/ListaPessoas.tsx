import React from "react"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"

const ListaPessoas = () => {

    const pessoas: string[] = useListaDePessoas()
    return (
        <ul>
            {pessoas.map(pessoa => <li key={pessoa}>{pessoa}</li>)}
        </ul>
    )
}

export default ListaPessoas