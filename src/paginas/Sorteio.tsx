import React from "react"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"

const Sorteio = () => {

    const pessoas = useListaDePessoas()

    return (
        <section>
            <form>
                <select name="jogadorDaVez" id="jogadorDaVez">
                    {pessoas.map(pessoa => <option key={pessoa}>{pessoa}</option>)}
                </select>
            </form>
        </section>
    )
}

export default Sorteio