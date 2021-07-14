import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Custom Components
import { TableView } from '../Components/Table';
import { SearchDropdown } from '../Components/SearchDropdown';
import { usePokemon } from '../hooks/usePokemon';
import { Loader } from '../Components/Loader';
import { PokemonButton } from '../Components/Buttons';

export const PokemonSearch = () => {

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [viewData, setViewData] = useState([]);
    const [selectOption, setSelectOption] = useState([]);
    const [viewDetails, setViewDetails] = useState();

    const { loading, pokemonData, getPokemonByUrl } = usePokemon();

    useEffect(() => {

        if (Object.keys(pokemonData).length > 0) {
            setViewData(viewData => [...viewData, pokemonData]);
        }

    }, [pokemonData]);

    const handleOnView = () => {

        setViewData([]);
        setViewDetails(true);
        getPokemonByUrl(selectOption);
    }

    const handleOnSearchView = () => {
        setViewDetails();
    }

    const handleOnCompare = () => {

        setDisabled(true);
        setViewDetails();
        setCount(count + 1);
    }

    const handleChange = (e) => {
        if(e){
            let newArr = [...selectOption];
            if (newArr[count]) {
                newArr[count] = e.value;
                setSelectOption(newArr);
            } else setSelectOption(selectOption.concat(e.value));
            setDisabled(false);
        }
    }

    return (

        <>
            {!viewDetails ?
                <>
                    <Link to="/" className="ml-5 mr-5">back home</Link>
                    <Row className="justify-content-md-center mt-5 ml-5 mr-5">
                        <SearchDropdown handleChange={handleChange} count={count} viewData={viewData} />
                    </Row>
                    <Row className="justify-content-md-center mt-5 ml-5 mr-5">
                        <Col md={12} className="text-center">
                            <p className="mb-3">Select a value to view or compare</p>
                            <PokemonButton text="View Pokémon Details" onClick={handleOnView} className="" disabled={disabled} />
                            <Link to="/search"
                                className="mt-3 d-block"
                                onClick={(event) => disabled ? event.preventDefault() : handleOnCompare()}
                            >Compare Pokémon
                            </Link>
                        </Col>
                    </Row>
                </>
                :
                <>
                    {viewData.length > 0 ?
                        <>
                            <Row className="justify-content-md-center ml-3 mt-5 mr-3">
                                <Col md={12}>
                                    <h3>{
                                        viewData.map((item, index) => {
                                            if (viewData.length - index !== 1) {
                                                return item.name + ' Vs '
                                            } else return item.name
                                        })
                                    }</h3>
                                    <PokemonButton text="Compare Pokémon" onClick={handleOnSearchView} className="float-right" />
                                </Col>
                            </Row>
                            <Row className="ml-3 mr-3">
                                <Col md={8}>
                                    <TableView viewData={viewData} loading={loading} />
                                </Col>
                            </Row>
                        </>
                        :
                        <Loader />
                    }

                </>
            }
        </>
    );
}