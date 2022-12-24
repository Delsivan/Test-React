import { realizarSorteio } from "./realizarSorteio"

describe('quando realizar um sorteio', () => {
    test('o participante nao pode sortear o proprio nome', () => {
        const pessoas = ['Max', 'Maria', 'Chloe', 'Charlott', 'José']

        const sorteio = realizarSorteio(pessoas)
        pessoas.forEach(pessoa => {
            const amigoSecreto = sorteio.get(pessoa)
            expect(amigoSecreto).not.toEqual(pessoas)
        })
    })
})

