//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];




function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    listaAmigos.push(amigo);
    exibirAmigos('h1' , listaAmigos);
      
    console.log(listaAmigos);
    
}


function sortearAmigo() {
        
        
        
        
    }
    

    
    

    







function exibirAmigos(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;a
}



function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

