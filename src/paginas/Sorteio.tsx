import React, { useState } from "react"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"

const Sorteio = () => {

    const pessoas = useListaDePessoas()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault() // para evitar de carregar a pagina
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (
        <section>
            <form onSubmit={sortear}>
                <select 
                    required 
                    name="jogadorDaVez" 
                    id="jogadorDaVez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione seu nome:</option>
                    {pessoas.map(pessoa => <option key={pessoa}>{pessoa}</option>)}
                </select>
                <p>Clique em sortear para ver quem e o seu amigo secreto!</p>
                <button className="botao-sortear">Sortear</button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    )
}

export default Sorteio