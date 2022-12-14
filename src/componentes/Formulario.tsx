import React, { useRef, useState } from "react"
import { useAdicionarPessoa } from "../state/hook/useAdicionarPessoa"
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro"

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarPessoa()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarPessoa = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault() 
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={adicionarPessoa}>
        <input 
            ref={inputRef}
            value={nome}
            onChange={evento => setNome(evento.target.value)}
            type="text" 
            placeholder="Digite os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>)
}
export default Formulario