import React from 'react';

export const SearchField = ({ placeholder, handleChange }) => (
    <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
    />

)
