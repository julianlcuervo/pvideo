import React from 'react';
import '../assets/styles/components/Search.scss'

const Search = () => {
  /*function myFunction() {
    var x = document.getElementById("s").value;
    console.log(x)
    <button onClick={myFunction()}>Realizar busqueda</button>
  } */ 
  return (
    <section className="main">
      <h2 className="main__title">¿Qué película buscas?</h2>
      <input type="search" className="input" placeholder="Buscar..." id="s" />
      
    </section>
  );
}

export default Search;