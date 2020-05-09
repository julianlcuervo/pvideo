import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import Login from '../containers/Login';
import '../assets/styles/App.scss';


const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Movie/';
const APIuser = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/User/'
const APIAI = 'http://54.145.135.30:3000/'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: [],
            trends: [],
            Recomends: [],
            AI: [],
            selectImage: [],
            selectUser: []
        };

        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                initialState: data,
                trends: data.filter(item =>
                    item.identifier === "Tendencia"
                ),
                Recomends: data.filter(item =>
                    item.identifier === "Recomendado"
                )
            }));
        fetch(APIAI)
            .then(response => response.json())
            .then(data => this.setState({
                AI: data
            }))
        fetch(APIuser)
            .then(response => response.json())
            .then(data => this.setState({
                selectUser: data.filter(item =>
                    item.IDUser == this.props.match.params.id
                )
            }))
        if (this.props.location.state == undefined) {
            this.props.history.push('/login')
        }
    }

    videoSearch(term) {
        const { initialState } = this.state
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

    imgSearch(term) {
        const { AI } = this.state
        const { initialState } = this.state

        this.setState({
            selectMovie:
                initialState.filter(item =>
                    item.cover === AI.arl.filter(item =>
                        item.r1.toUpperCase() === term.toUpperCase()
                        ||
                        item.r2.toUpperCase() === term.toUpperCase()
                        ||
                        item.r3.toUpperCase() === term.toUpperCase()
                        ||
                        item.r4.toUpperCase() === term.toUpperCase()
                        ||
                        item.r5.toUpperCase() === term.toUpperCase()
                    )[0].move)
        })
    }


    selectionImage() {
        const { selectImage } = this.state
        this.state({
            selectMovie:
                console.log(selectImage)
        })
    }

    selectItem(term) {
        this.props.history.push('/bloc/'+this.id+"/"+term,false);
    }

    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        const { trends } = this.state;
        const { Recomends } = this.state;
        const { selectUser } = this.state;

        console.log(this.props)
        //console.log(this.props.match.params.id)


        return (
            <div className="App">
                {selectUser.map(item =>
                    <Header key={this.props.match.params.id} {...item} />
                )}
                <Search onSearchTermChange={term => { this.videoSearch(term), this.imgSearch(term) }} />
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
                        {trends.map(item =>
                            <CarouselItem
                                key={item.id} {...item}
                                onCarouselItemTermChange={term => this.selectItem(term)}
                            />
                        )}
                    </Carousel>
                </Categories>

                <Categories title="Recomendados">
                    <Carousel>
                        {Recomends.map(item =>
                            <CarouselItem
                                key={item.id} {...item}
                                onCarouselItemTermChange={term => this.selectItem(term)}
                            />
                        )}
                    </Carousel>
                </Categories>

                <Categories title="Catalogo completo">
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
