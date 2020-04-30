import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from '../containers/Home'
import Bloc from '../containers/Bloc';
import Player from '../containers/Player';
import Register from '../containers/Register';
import Login from '../containers/Login'

const App = () => (
    <BrowserRouter>
        <Route exact path="/home/:id" component={Home} />
        <Route exact path="/bloc/:id" component={Bloc} />
        <Route exact path="/player/:id" component={Player} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
    </BrowserRouter>
);

export default App;