// IIFE Immediately invoked function Expressions
(async function () {
    const response = await fetch("./movies.json");
    const movies = await response.json();
  
    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("movie-list");
    const detailsElem = document.getElementById("moviesDetailsContainer");
  
    function loadmovieDetails(movies) {
      detailsElem.innerHTML = `
          <h2 class="title">${movies.title}</h2>
          <h3>movierecommendation:</h3>
          <ul>${movie.map(function (movies) {
            return "<li>" + movies + "</li>"
          }).join("")}</ul>
          <h3>Instruction:</h3>
          <div>${movies.instructions}</div>
      `;
    }
  
    function displaySearchResults (results) {
      listElem.innerHTML = "";
      results.forEach(function (movies) {
        const li = document.createElement("li");
        const listItem = `
            <h2 class="title">${movies.title}</h2>
            <div class="description">${movies.description}</div>
        `;
        li.innerHTML = listItem;
        li.addEventListener("click", function () {
          loadmovieseDetails(movies);
        });
        listElem.appendChild(li);
      })
    }
  
    function search() {
      const query = inputElem.value.toLowerCase();
      const results = movies.filter(function (movies) {
        return (movies.title.toLowerCase().includes(query) ||
        movies.data.join(" ").toLowerCase().includes(query))
      });
  
      displaySearchResults(results);
    }
  
    btnElem.addEventListener("click", search);
  })();