import React, { Component } from 'react';
import '../assets/styles/components/Search.scss'

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <section className="main">
        <h2 className="main__title">¿Qué película buscas?</h2>
        <input type="search" className="input" placeholder="Buscar..." 
        value={this.state.value}
        onChange={event => this.onInputChange(event.target.value)} />
      </section>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default Search;