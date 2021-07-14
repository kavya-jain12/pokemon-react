import React, { useState, useEffect } from 'react';
import { getSLS } from '../helpers/secureStorage';

import { Label, Col } from "reactstrap";
import Select from 'react-select';
import { useHistory } from 'react-router-dom';

/**
 * Renders the search 
 */

export const SearchDropdown = React.forwardRef(({ handleChange, count, viewData }, ref) => {

    const history = useHistory();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        let data = getSLS('pokemon-data');
        
        // if cache clears go back to home page to load data
        if(data){
            let optionRes = data.map(item => {
                return {
                    value: item.name,
                    label: item.name
                };

            });
            if (optionRes) {
                setOptions(optionRes);
            }
        } else history.push("/");

    }, []);

    const buildSearch = [];

    // return select based on count value
    for (var i = 0; i <= count; i++) {

        // push the component to buildSearch
        buildSearch.push(
            <Col md={3} className="text-center mt-4 mb-5">
                <Label className="d-inline-block" >Select your Pokémon</Label>
                <Select
                    isClearable={true}
                    isDisabled={ (count !== i) ? true : false }
                    onChange={handleChange}
                    options={options}
                    uniqueKey={`name${[i]}`}
                    defaultValue={viewData.length > 0 && viewData[i] ? { label: viewData[i].name, value: viewData[i].name } : ""}
                />
            </Col>
        );
    }

    return (
        <>
            {buildSearch}
        </>
    );

});
