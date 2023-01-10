
const nome = document.querySelector("#nome");

const atracoes = document.querySelector("#atracoes");

const descricao = document.querySelector("#descricao");

const data = document.querySelector("#data");

const lotacao = document.querySelector("#lotacao");

const formulario = document.querySelector("#form");



formulario.onsubmit = (event) => {
    event.preventDefault();
    if(descricao.value.length < 50) {       
        alert("Mínimo 50 caracteres");
        return
    }
    const {elements} = event.target;
    const lista = [];
    for(const elemento of elements){
        lista.push(`${elemento.id}:${elemento.value}`);
    }
    console.log(lista);
    alert("teste");
}

