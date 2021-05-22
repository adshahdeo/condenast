import React from 'react';

// create UkNewsFilters for filters specific to uk headlines with prop function handleChange
const UkNewsFilters = ({ handleChange }) => {
    // render the skeleton with filters
    return (
        <>
            <div>
                <label>Country</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='country'
                    placeholder='Enter Country'
                />
            </div>
            <div>
                <label>Category</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='category'
                    placeholder='Enter Category'
                />
            </div>
        </>
    );
};

export default UkNewsFilters;
