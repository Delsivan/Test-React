import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe('Comportamento do Formulario', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        //encontrar o input no DOM
        //screen significa tela, ou seja ele busca na tela
        const input = screen.getByPlaceholderText('Digite os nomes dos participantes');
    
        //encontrar o botão
        //getByRole irá buscar pela responsabilidade
        const botao = screen.getByRole('button');
    
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument();
    
        //garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled();
    })
    
    test('adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        
        const input = screen.getByPlaceholderText('Digite os nomes dos participantes');
    
        const botao = screen.getByRole('button');
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Maria'
            }
        })
    
        // clicar no botao de submeter
        fireEvent.click(botao)
    
        // garantir que o input esteja com o foco ativo para
        expect(input).toHaveFocus()
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    })
    
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        
        const input = screen.getByPlaceholderText('Digite os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Maria'
            }
        })
    
        fireEvent.click(botao)
    
        fireEvent.change(input, {
            target: {
                value: 'Maria'
            }
        })
        fireEvent.click(botao)
    
        const mensagemDeErro = screen.getByRole('alert')
        expect(mensagemDeErro.textContent).toBe('Nome já está cadastrado na lista!')
    })
    
    test('a mensagem de erro deve sumir após 5 segundos', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        
        const input = screen.getByPlaceholderText('Digite os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Maria'
            }
        })
    
        fireEvent.click(botao)
    
        fireEvent.change(input, {
            target: {
                value: 'Maria'
            }
        })
        fireEvent.click(botao)
    
        let mensagemDeErro = screen.queryByRole('alert')
            expect(mensagemDeErro).toBeInTheDocument()
    
            // espera N segundos
            act(() => {
                jest.runAllTimers()
            });
        
            mensagemDeErro = screen.queryByRole('alert')
            expect(mensagemDeErro).toBeNull()
    })
})

