/* 
Obj 1: Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer.

Passo 1: Pegar o elemento que representa o botão na tela, usando o js.
Passo 2: Dar um jeito de identificar quando o usuário clicar no botão.
Passo 3: Dar um jeito de pegar o elemento da modal no js.
Passo 4: Abrir a modal na tela.

Obj 2: Quando o usuário clicar no x devemos fechar a modal.

Passo 1: Dar um jeito de pegar o elemento de fechar modal usando o js.
Passo 2: Dar um jeito de identificar quando o usuário clica no x.
Passo 3: Fechar a modal.
*/

const botaoTrailer = document.querySelector (".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

