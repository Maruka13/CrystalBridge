// Desafios Alura: 1- Colocar uma variável do tipo "verdadeiro" ou "falso" (Variáveis Primitivas e Controle de Fluxo) para indicar se venceu ou não.
//2- Bloquear a possibilidade do jogador "roubar" colocando um número maior que 3.


function jogar() {
    let rodada = 1;
    let venceu = false; // variável booleana

    while (rodada <= 3) {
        console.log("Rodada: " + rodada);

        let escolhaJogador = prompt("Nível " + rodada + ", vidro 1, 2 ou 3?");
        escolhaJogador = parseInt(escolhaJogador);

        // Validação entrada
        while (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3) {
            alert("Escolha inválida! Por favor, escolha um número entre 1 e 3.");
            escolhaJogador = parseInt(prompt("Nível " + rodada + ", vidro 1, 2 ou 3?"));
        }

        let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador === pisoQuebrado) {
            alert("O vidro quebrou! Você morreu.");
            venceu = false; // perdeu
            break; // sai do loop
        } else {
            alert("Você passou! O piso quebrado estava na ponte: " + pisoQuebrado);
        }

        rodada++;
    }

    // Se passou todas as rodadas
    if (rodada > 3) {
        venceu = true;
    }

    // Mostra resultado com base na variável booleana
    if (venceu) {
        alert("Você venceu! Parabéns!");
    } else {
        alert("Fim de jogo.");
    }
}
