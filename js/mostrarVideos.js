// importe para acessar a função que está trazendo as informações que estão dentro da lista
import { conectaApi } from "./conectaApi.js";

// dataAttibutes para isolar os elementos
const lista = document.querySelector("[data-lista]");

//criação do elemento lista e da classe video
export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`

            return video;

}

// função criada para consumir as funções do conectaApi
async function listaVideos() {
    try {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
} catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possíel carregar a lista de videos</h2>`
 }

}

listaVideos();