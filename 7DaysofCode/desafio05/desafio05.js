let adicionar,opcao,item;
let continuar = true;
const frutas = [];
const laticionios = [];
const doces = [];
const legumes = [];
const root = document.getElementById("lista");

function nomeItem(){
     item = prompt("Digite o item que voce pretende marcar na lista")
}

function categorias(){
    opcao = prompt("Digite o numero que o tem irá ficar na lista! 1(frutas), 2(Laticionios), 3(doces),4(Verduras)");
    switch (opcao) {
        case '1':
            adicionar = frutas.push(item);
            break;
        case '2':
            adicionar = laticionios.push(item);
            break;
        case '3':
            adicionar = doces.push(item);
            break;
        case '4':
            adicionar = legumes.push(item);
            break;
        default:
            alert("Não é um opcao incluida! Por favor escolher a opçao correta")
            break;
    }
    sair = prompt("Voce deseja sair e imprimir a lista? 1(não) 2(sim) ");
    if(sair == 2){continuar = false};
}

function imprimirLista(){
    console.log(frutas);
    console.log(laticionios);
    console.log(doces);
    console.log(legumes);
    const listaTitulo = document.createElement('h4');
    listaTitulo.innerHTML = 'Lista de Compras';
    root.appendChild(listaTitulo);
    const tituloFrutas = document.createElement('p');
    tituloFrutas.innerHTML = 'Frutas:';
    tituloFrutas.id = 'tituloFrutas';
    root.appendChild(tituloFrutas);
    const listaItens1 = document.createElement('ul');
    listaItens1.innerHTML = "<li>"+frutas+"</li>"
    root.appendChild(listaItens1);
    const tituloLaticinios = document.createElement('p');
    tituloLaticinios.innerHTML = 'Laticinios:';
    tituloLaticinios.id = 'tituloLaticinios';
    root.appendChild(tituloLaticinios);
    const listaItens2 = document.createElement('ul');
    listaItens2.innerHTML = "<li>"+laticionios+"</li>"
    root.appendChild(listaItens2);
}


function criarLista(){
    while(continuar){
        nomeItem();
        categorias();
    }
    imprimirLista()
}


criarLista();









