import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

const API = 'http://ec2-54-152-225-204.compute-1.amazonaws.com:8000/api/Movie/';

//container for componen of Header
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: []
        };
    }
    
    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ initialState: data }));
    }

    videoSearch(term) {
        const { initialState } = this.state;
        this.setState({
            selectMovie:
                initialState.filter(item =>
                    item.title.toUpperCase().indexOf(term.toUpperCase()) !== -1
                    &&
                    term.toUpperCase() !== ""
                    &&
                    term.toUpperCase() !== " "
                )
        })
    }

    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        return (
            <div className="App">
                <Header />
                <Search onSearchTermChange={term => this.videoSearch(term)} />
                {selectMovie.length >= 1 &&
                    <Categories title="Resultados de busqueda">
                        <Carousel>
                            {selectMovie.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )}
                        </Carousel>
                    </Categories>
                }

                <Categories title="Tendencias">
                    <Carousel>
                        {initialState.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>

                <Categories title="Recomendados">
                    <Carousel>
                        {initialState.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>

                <Footer />
            </div>
        );
    }
}

export default Home;