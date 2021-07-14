import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the button
 */

export const PokemonButtonLink = React.forwardRef(({ className = "", type, text }, ref) => {

    return (
        <Link to={`/${type}`} className="item">
            <button className={`bg-btn-light ${className}`}>{text} </button>
        </Link>
    );
});

export const PokemonButton = React.forwardRef(({ className = "", onClick, text, disabled = false }, ref) => {

    return (
        <button className={`bg-btn-light ${className}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>

    );
});