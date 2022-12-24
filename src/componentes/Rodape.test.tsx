import { screen, render } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"
import Rodape from "./Rodape"

jest.mock('../state/hook/useListaDePessoas', () => {
    return {
        //fn -> useListaDePessoas irá se comportar como uma função
        useListaDePessoas: jest.fn()
    }
})

describe('quando não houver participantes suficientes', () => {
    beforeEach(() => {
        (useListaDePessoas as jest.Mock).mockReturnValue([])
    })
    
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('quando houver participantes suficientes', () => {
    const pessoas = ['Max', 'Maria', 'Chloe', 'Charlott', 'José']
    beforeEach(() => {
        (useListaDePessoas as jest.Mock).mockReturnValue(pessoas)
    })

    test('a brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })
})
