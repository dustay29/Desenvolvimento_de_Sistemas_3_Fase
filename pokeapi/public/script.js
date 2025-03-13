const clicou = document.querySelector("#clicou");
const input = document.querySelector("#input");

  function getPokemonData(resultado) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${resultado}`)
          .then(res => res.json())
          .then(data => {
              document.getElementById("pokemon").innerHTML = `
              <h2>${data.name.toUpperCase()}</h2>
              <img src="${data.sprites.front_default}" alt="${data.name}">
              `;
          })
          .catch(error => {
              console.error(error);
              document.getElementById("pokemon").innerHTML = `
              <h2>POKEMON INVÁLIDO</h2>
              `;
          });
  }

  clicou.addEventListener("click", () => {
      const resultado = parseInt(input.value);  

      if ((resultado) && resultado > 0) {  
          getPokemonData(resultado);
      } else {
          alert("Por favor, insira um número válido para o Pokémon.");
      }
  });


  getPokemonData();
;
