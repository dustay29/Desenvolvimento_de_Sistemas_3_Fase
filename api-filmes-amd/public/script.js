const clicou = document.querySelector("#clicou");
const inputText = document.querySelector("#inputText");

function getFilmes(resultadoText) {
    fetch(`http://www.omdbapi.com/?apikey=28d0dee8&t=${resultadoText}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("filmes").innerHTML += `
            <div class="filme">
                <h2>${data.Title.toUpperCase()}</h2>
                <h3>${data.Year.toUpperCase()}</h3>
                <img class="imagem-filme" src="${data.Poster}" alt="${data.Title}">
            </div>
            `;
        })
        .catch(error => {
            console.error(error);
        });
}

clicou.addEventListener("click", () => {
    const resultadoText = inputText.value;  
    if (resultadoText) {  
        getFilmes(resultadoText);
    } else {
        alert("Por favor, insira um Nome válido para o Filme.");
    }
});
