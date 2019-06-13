const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("");
function abrirMenu(){

lista.classList.toggle("ativo");

}



function rodaRda(){


    roleta.classList.toggle("roda-jequiti");
}
maisa.onclick = abrirMenu;
roleta.onclick =rodaRda;
