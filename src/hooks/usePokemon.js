import { useState, useEffect } from 'react';
import { getSLS, setSLS } from '../helpers/secureStorage';

export const usePokemon = () => {

    const [loading, setLoading] = useState();
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        getAllPokemon();
    }, []);

    const getAllPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(
                (result) => {
                    let data = result.results;
                    setSLS('pokemon-data', data);
                },
                (error) => {
                    console.log("error ", error);
                }
            )
    }

    const getPokemonByUrl = (selectOption) => {

        try {

            setLoading(true);

            let apiRes = getSLS('pokemon-data');
            selectOption.forEach(item => {
                let getIndex = apiRes.findIndex(o => o.name === item);
                // if the api was fetched previously then use the data else call the api
                if (!apiRes[getIndex].data) {
                    fetch(apiRes[getIndex].url)
                        .then(response => response.json())
                        .then(res => {

                            let types = res.types.map(function (el) { return el.type.name; });
                            // create data
                            let data = {
                                name: res.name,
                                height: res.height,
                                weight: res.weight,
                                base_experience: res.base_experience,
                                types: types.toString()
                            };
                            apiRes[getIndex].data = data;
                            setSLS('pokemon-data', apiRes);
                            setPokemonData(data);
                            setLoading(false);

                        }).catch((error) => {
                            setLoading(false)
                            console.error('Error:', error);
                        });
                } else {
                    setPokemonData(apiRes[getIndex].data);
                    setLoading(false);

                }
            });

        } catch (error) {

            console.log("Pokemon data fail !!", error);
            setLoading(false);
        }
    }

    return {
        loading,
        pokemonData,
        getAllPokemon,
        getPokemonByUrl
    };

}