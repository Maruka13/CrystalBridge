function jogar() {

    rodada = 1
    while(rodada <= 3) {
        console.log("Rodada: " + rodada)

        escolhaJogador = prompt("Nível "+rodada+", vidro 1, 2 ou 3?")
        pisoQuebrado = Math.floor(Math.random()*3) +1;
        rodada = 1000;

        if(escolhaJogador == pisoQuebrado) {
            alert("O vidro quebrou! Você morreu.")
        }
        else {
            alert("Você passou! O piso qubrado estava na ponte: " + pisoQuebrado)
        }

        rodada = rodada + 1

    }

}


