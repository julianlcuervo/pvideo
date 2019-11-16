import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from '../containers/Home'
import Bloc from '../containers/Bloc';

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/bloc" component={Bloc} />
    </BrowserRouter>
);

export default App;