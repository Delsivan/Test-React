import { screen, render, fireEvent } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"
import Sorteio from "./Sorteio"

jest.mock('../state/hook/useListaDePessoas', () => {
    return {
        //fn -> useListaDePessoas irá se comportar como uma função
        useListaDePessoas: jest.fn()
    }
})

jest.mock('../state/hook/useResultadoSorteio', () => {
    return {
        //fn -> useListaDePessoas irá se comportar como uma função
        useResultadoSorteio: jest.fn()
    }
})

describe('pagina de sorteio', () => {
    const pessoas = ['Max', 'Maria', 'Chloe', 'Charlott', 'José']

    const resultado = new Map([
        ['Max', 'Maria'],
        ['Maria', 'Chloe'],
        ['Chloe', 'Charlott'],
        ['Charlott', 'José'],
        ['José', 'Max']
    ])

    beforeEach(() => {
        (useListaDePessoas as jest.Mock).mockReturnValue(pessoas);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test('todos os participantes podem exibir o sue amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(pessoas.length + 1)
    })

    test('o amigo secreto e exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const select = screen.getByPlaceholderText('Selecione o seu nome')
        
        fireEvent.change(select, {
            target: {
                value: pessoas[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()
    })
})