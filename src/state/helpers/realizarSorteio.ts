import shuffle from "just-shuffle";

export function realizarSorteio (pessoas: string[]) {
    const totalDeParticipantes = pessoas.length
    const embaralhado = shuffle(pessoas)

    const resultado = new Map<string, string>()

    for (let index = 0; index < totalDeParticipantes; index++){
        const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);
    }

    return resultado
}