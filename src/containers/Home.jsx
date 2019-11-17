import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';


const API = 'http://ec2-34-227-68-165.compute-1.amazonaws.com:8000/api/Movie/';

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

    selectItem(term) {
        this.props.history.push('/bloc', { id: term })
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
                                    <CarouselItem
                                        key={item.id} {...item}
                                        onCarouselItemTermChange={term => this.selectItem(term)}
                                    />
                            )}
                        </Carousel>
                    </Categories>
                }

                <Categories title="Tendencias">
                    <Carousel>
                        {initialState.map(item =>
                            <CarouselItem
                                key={item.id} {...item}
                                onCarouselItemTermChange={term => this.selectItem(term)}
                            />
                        )}
                    </Carousel>
                </Categories>

                <Categories title="Recomendados">
                    <Carousel>
                        {initialState.map(item =>
                            <CarouselItem
                                key={item.id} {...item}
                                onCarouselItemTermChange={term => this.selectItem(term)}
                            />
                        )}
                    </Carousel>
                </Categories>

                <Footer />
            </div>
        );
    }
}

export default Home;