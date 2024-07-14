//Como realizar a conexao com a api

async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

    // console.log(conexaoConvertida);
}

// função para criar/enviar os vídeos 
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


// funcao para buscar os videos dentro da api
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//Exportar a variavel conectaApi que terá várias funções
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo

}