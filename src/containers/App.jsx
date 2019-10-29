import React, {useState , useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

const API = 'http://ec2-34-229-42-106.compute-1.amazonaws.com:8000/api/Movie/';

//container for componen of Header
const App = () => {
    const initialState = useInitialState(API);
    console.log(initialState)
    return(
        <div className="App">
            <Header/>
            <Search/>
            {initialState.length > 2 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {initialState.map(item =>
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