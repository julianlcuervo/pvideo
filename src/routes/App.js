import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from '../containers/Home'
import Bloc from '../containers/Bloc';
import Player from '../containers/Player';
import Register from '../containers/Register';

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/bloc/:id" component={Bloc} />
        <Route exact path="/player/:id" component={Player} />
        <Route exact path="/register" component={Register} />
    </BrowserRouter>
);

export default App;