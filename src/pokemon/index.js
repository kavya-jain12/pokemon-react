import React from 'react';
import { Navbar } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/scss/index.scss';

// Custom Components
import { PokemonList } from './PokemonList';
import { PokemonSearch } from './PokemonSearch';

const Pokemon = () => {

    return (
        <BrowserRouter>
            <Navbar color="light" style={{ height: '70px' }}></Navbar>
            <Switch>
                <Route exact path="/" component={PokemonList} />
                <Route path="/search" component={PokemonSearch} />
            </Switch>
        </BrowserRouter>
    );
}

export default Pokemon;