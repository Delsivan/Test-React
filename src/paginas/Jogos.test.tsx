import { screen, render, fireEvent } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import Jogos from "./Jogos"

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('pagina jogos', () => {
    test('deve renderizar corretamente', () => {
        const { container } = render(
            <RecoilRoot>
                <Jogos />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})