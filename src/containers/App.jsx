import React, {useState , useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

const API = 'http://ec2-54-159-156-52.compute-1.amazonaws.com:8000/api/Movie/';

//container for componen of Header
const App = () => {
    const initialState = useInitialState(API);
    console.log(initialState)
    var a = initialState.filter(item => item.title==="Avengers Endgame")
    console.log(a.length)  
    return(
        <div className="App">
            <Header/>
            <Search/>
            {a.length === 1 &&
                <Categories title="Resultados de busqueda">
                    <Carousel>
                        {a.map(item =>
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

            <Footer/>
        </div>
    );
}

export default App;