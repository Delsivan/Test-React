import { screen, render, fireEvent } from "@testing-library/react"
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

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

jest.mock('../state/hook/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
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

    test('a brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        
        //toHaveBeenCalled -> tenha sido chamado
        // toHaveBeenCalledTimes(1) -> tenha sido chamado pelo menos uma 1 vez
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio') 
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})

describe('o Rodape com participantes suficientes', () => {
    beforeEach(() => {
        (useListaDePessoas as jest.Mock).mockReturnValueOnce(['Max', 'Maria', 'Chloe', 'Charlott', 'José'])
    })
    test('habilita o início da brincadeira', async () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
})