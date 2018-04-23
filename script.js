function gerarTracinho(entrada){
    let palavra = "";
    for(let letra of entrada){
        palavra = palavra +"-";
    }
    return palavra;
}

function atualizarTracinho(chute, secreta, atual){
    let palavra = "";
    for(let i = 0; i< secreta.length; i++){
        if(chute === secreta[i]){
            palavra = palavra + chute;
        }
        else{
            palavra = palavra + atual[i];
        }
    }
    return palavra;
}

function existeLetra(letra, palavra){
    for(let letraPalavra of palavra){
        if(letra === letraPalavra){
            return true;
        }
    }
        return false;
}


let botao = document.querySelector("button");
let input = document.querySelector("input");
let palavra = document.querySelector("#palavra");
let tentativas = document.querySelector("#tentativas");
let letrasErradas = document.querySelector("#letras");

let secreta = "abacaxi";
let tracinhos = gerarTracinho(secreta);
let contador = 0;

palavra.innerHTML = tracinhos;

botao.onclick = function(){
    let letra = input.value;
    let existe = existeLetra(letra, secreta);

    if(existe){
        console.log("acertou");
        let acerto = atualizarTracinho(
            letra, secreta,
            palavra.innerHTML);
        palavra.innerHTML = acerto;
    }
    else{
        console.log("errou");
        letrasErradas.innerHTML += letra;
        contador ++;
        tentativas.innerHTML = `Erros: ${contador}`;
    }

    if(contador > 5){
        alert("Voce perdeu! GAME OVER");
        botao.onclick = null;
    }

    if(palavra.innerHTML === secreta){
        alert("Voce ganhou! PARABENS EEEEE!");
        botao.onclick = null;
    }
    
}