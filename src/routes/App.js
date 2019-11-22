import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from '../containers/Home'
import Bloc from '../containers/Bloc';
import Player from '../containers/Player';

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/bloc/:id" component={Bloc} />
        <Route exact path="/player/:id" component={Player} />
    </BrowserRouter>
);

export default App;