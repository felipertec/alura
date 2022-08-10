//Variaveis globais
let nome;
let tentativa = 3;
let venceu;
let sorteado = Math.floor(Math.random() * 11); // gera um valor aleatorio para tentar acertar!
//console.log(sorteado);
const root_tela = document.getElementById("tela");


/**
 * Funções para serem chamadas no sistema!
 */

function apresentacao(){
    nome = prompt("Digite Seu nome");
    document.getElementById("btnApresentacao").remove();
} 

function apresentacao2(){
    const rm = document.getElementById("tituloApresentacao").remove();
    const chuvisco = document.createElement("img");
    chuvisco.src = 'img/chiado.gif';
    chuvisco.className = 'telaChuvisco';
    chuvisco.id = 'telaChuvisco';
    root_tela.appendChild(chuvisco);
    const audio = document.createElement("audio");
    audio.controls = "controls";
    audio.autoplay = "autoplay";
    audio.src = "sound/tv.mp3";
    audio.id = "audioTv";
    audio.style.visibility = false;
    root_tela.appendChild(audio);
}

function apresentacao3(){
    document.getElementById("telaChuvisco").remove();
    document.getElementById("audioTv").remove();
    const saw = document.createElement("img");
    saw.src = 'img/saw-jigsaw.gif';
    saw.className = 'apresentacaoSaw';
    saw.id = 'apresentacaoSaw';
    root_tela.appendChild(saw);
    const audio = document.createElement("audio");
    audio.controls = "controls";
    audio.autoplay = "autoplay";
    audio.src = "sound/saw.mp3";
    audio.id = "audioSaw";
    root_tela.appendChild(audio);
    const pular = document.createElement("p");
    pular.innerHTML = "<br>";
    root_tela.append(pular);
    setTimeout(() => {
        //saw.src = 'img/saw_parado.png'
        const btn = document.createElement("button");
        btn.id = 'btnProximo';
        btn.className = 'btnProximo';
        btn.innerHTML = "PROXIMO";
        btn.onclick = function(){ iniciarJogo()};
        root_tela.appendChild(btn);
    }, 2000)
}


function iniciarJogo(){
    document.getElementById("apresentacaoSaw").remove();
    document.getElementById("btnProximo").remove();
    document.getElementById("audioSaw").remove();
    const audio = document.createElement("audio");
    audio.controls = "controls";
    audio.autoplay = "autoplay";
    audio.src = "sound/theme.m4a";
    const audio2 = document.createElement("audio");
    audio2.controls = "controls";
    audio2.autoplay = "autoplay";
    audio2.src = "sound/texto.mp3";
    const element = document.createElement("p");
    element.innerHTML = `Você terá que acertar o numero que está armazenado no computador.\n
                 Esse valor está entre 0 a 10. \n
                 Você terá 3 tentativas para tentar acertar\n
                 Viver ou Morrer faça sua escolha!`
    element.id = "desafio";
    element.className = "desafio";
    root_tela.appendChild(element);
    typeWriter(element);
    setTimeout(() => {
        execucaoJogo();
    }, 18000)
} 

function execucaoJogo(){
    while(tentativa != 0){
        let resp = prompt("Digite o valor?")
        if(resp == sorteado){
            venceu = true;
            tentativa = 0;
        }else{
            tentativa--;
            venceu = false;
            const audio = document.createElement("audio");
            audio.controls = "controls";
            audio.autoplay = "autoplay";
            audio.src = "sound/Errou.m4a";
            audio.id = "audioSaw";
            root_tela.appendChild(audio);
        }
    }

    if(venceu === false){
        gameOver2();
    }else if(venceu === true){
        gameOver1();
    }

}

function gameOver1(){
    while(document.getElementById("audioSaw")){
        document.getElementById("audioSaw").remove()
    }
    document.getElementById("desafio").remove();
    const img = document.createElement("img");
    img.src = "img/aplausos.gif";
    img.id = "win";
    img.className = "win"
    root_tela.appendChild(img);
    const audio = document.createElement("audio");
    audio.controls = "controls";
    audio.autoplay = "autoplay";
    audio.src = "sound/aplauso.m4a";
    audio.id = "audioClosed";
    setTimeout(() => {
        document.getElementById("win").remove();
        const btn = document.createElement('a');
        btn.id = 'reiniciar';
        btn.className = 'reiniciar';
        btn.innerHTML = 'Jogar Novamente';
        btn.onclick = function(){ document.location.reload(true)}
        root_tela.appendChild(btn);
    }, 2400)
}

function gameOver2(){
    while(document.getElementById("audioSaw")){
        document.getElementById("audioSaw").remove()
    }
    document.getElementById("desafio").remove();
    const img2 = document.createElement("img");
    img2.src = "img/lose.gif";
    img2.className = "lose";
    img2.id = "lose";
    root_tela.appendChild(img2);
    const linha2 = document.createElement("p");
    linha2.innerHTML = `<br>`;
    root_tela.appendChild(linha2);
    setTimeout(() => {
        const audio = document.createElement("audio");
        audio.controls = "controls";
        audio.autoplay = "autoplay";
        audio.src = "sound/door.mp3";
        audio.id = "audioClosed";
        const audio2 = document.createElement("audio");
        audio2.controls = "controls";
        audio2.autoplay = "autoplay";
        audio2.src = "sound/laugh.mp3";
        audio2.id = "audioClosed";
        document.getElementById("lose").remove();
        const btn = document.createElement('a');
        btn.id = 'reiniciar';
        btn.className = 'reiniciar';
        btn.innerHTML = 'Jogar Novamente';
        btn.onclick = function(){ document.location.reload(true)}
        root_tela.appendChild(btn);
    }, 2600)
}

//função que corta um texto e faz com que ele seja digitado letra por letra
function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });  
}

function jogo(){
    apresentacao();
    setTimeout(() =>{
        apresentacao2();
        setTimeout(() =>{
            apresentacao3();
        }, 5000);
    }, 3000);
}

//jogo();










