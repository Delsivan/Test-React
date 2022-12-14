import React from "react"
import { screen, render, fireEvent} from '@testing-library/react'
import { RecoilRoot } from "recoil"
import ListaPessoas from "./ListaPessoas"
import { useListaDePessoas } from "../state/hook/useListaDePessoas"

jest.mock('../state/hook/useListaDePessoas', () => {
    return {
        //fn -> useListaDePessoas irá se comportar como uma função
        useListaDePessoas: jest.fn()
    }
})

describe('Componente ListaPessoas', () => {
    beforeEach(() => {
        (useListaDePessoas as jest.Mock).mockReturnValue([])
    })
    test('deve renderizar uma lista vazia de participantes', () => {
        render(
            <RecoilRoot>
                <ListaPessoas />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('Lista preenchida com participantes', () => {
    const pessoas = ['Max', 'Maria']
    beforeEach(() => {
        (useListaDePessoas as jest.Mock).mockReturnValue(pessoas)
    })
    test('deve renderizar uma lista com dois participantes', () => {
        render(
            <RecoilRoot>
                <ListaPessoas />
            </RecoilRoot>
        )
        
        const itens = screen.queryAllByRole('listitem')
         expect(itens).toHaveLength(pessoas.length)
    })
})
    
