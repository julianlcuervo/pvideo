import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';


const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Movie/';
const APIuser = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/User/'
const APIAI = 'http://18.206.124.96:3000/'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: [],
            trends: [],
            Recomends: [],
            AI: [],
            selectUser: [],
            translateWord: ''
        };

        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                initialState: data,
                trends: data.sort(function (a, b) {
                    if (a.duration < b.duration) {
                        return 1;
                    }
                    if (a.duration > b.duration) {
                        return -1;
                    }
                    return 0;
                }
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

    translateSearch(term) {
        if (term !== "") {
            fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='
                + 'trnsl.1.1.20200511T195703Z.19d6cedd3c437cbf.4df413b84acb49083c3d95bf8d52e3d98853b4d1'
                + '&lang='
                + encodeURIComponent('en')
                + '&text='
                + encodeURIComponent(term))
                .then(response => response.json())
                .then(data => this.imgSearch(data.text[0]));
        }
    }

    imgSearch(term) {
        const { AI } = this.state
        const { initialState } = this.state
        try {
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
        } catch (error) {
        }
    }

    selectItem(term) {
        this.props.history.push('/bloc/' + this.id + "/" + term, false);
    }

    changeStatePage(term) {
        this.props.history.push(term)
        console.log(this.props.location.state)
    }

    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        const { trends } = this.state;
        const { Recomends } = this.state;
        const { selectUser } = this.state;
        trends.splice(6)

        return (
            <div className="App">
                {selectUser.map(item =>
                    <Header statePage={term => this.changeStatePage(term)} key={this.props.match.params.id} {...item} />
                )}
                <Search onSearchTermChange={term => { this.videoSearch(term), this.translateSearch(term) }} />
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
