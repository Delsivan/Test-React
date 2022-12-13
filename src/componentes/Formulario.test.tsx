import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)
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