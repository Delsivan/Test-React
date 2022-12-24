import { screen, render, fireEvent } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"
import Sorteio from "./Sorteio"

jest.mock('../state/hook/useListaDePessoas', () => {
    return {
        //fn -> useListaDePessoas irá se comportar como uma função
        useListaDePessoas: jest.fn()
    }
})

describe('pagina de sorteio', () => {
    const pessoas = ['Max', 'Maria', 'Chloe', 'Charlott', 'José']

    beforeEach(() => {
        (useListaDePessoas as jest.Mock).mockReturnValue(pessoas)
    })

    test('todos os participantes podem exibir o sue amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(pessoas.length)
    })
})