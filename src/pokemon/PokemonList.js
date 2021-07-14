import React from 'react';
import { Row, Col } from 'reactstrap';

// Custom Components
import { PokemonButtonLink } from '../Components/Buttons';

export const PokemonList = () => {

    return (

        <>
            <Row className="justify-content-md-center mt-5">
                <h2 className="text-secondary">Gotta catch ‘em all</h2>
                <Col md={12} className="text-center mt-4 mb-5">
                    <PokemonButtonLink type="search" text="View Pokémon Details" />
                </Col>
                <Col md={12} className="text-center">
                    <PokemonButtonLink type="search" text="Compare Pokémon" />
                </Col>
            </Row>
        </>
    );
}