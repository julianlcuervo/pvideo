import React from 'react';
import '../assets/styles/components/Search.scss'

const Search = () => {
  var search = document.getElementById("search");
  var button = document.getElementById("button");

  if (search) {
    button.addEventListener("click", useSearch);
  }
  function useSearch() {
    var x = search.value;
    
    alert(x);
    console.log(x)
  }
  return (
    <section className="main">
      <h2 className="main__title">¿Qué película buscas?</h2>
      <input type="search" className="input" placeholder="Buscar..." id="search" />
      <input type="button" id="button" value="Realizar busqueda"></input>
    </section>
  );
}

export default Search;