import React from 'react';

// create AllNewsFilters for filters specific to everything with prop function handleChange
const AllNewsFilters = ({ handleChange }) => {
    // render the skeleton with filters
    return (
        <>
            <div>
                <label>Search only in Title of the article</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='qInTitle'
                    placeholder='Search Title'
                />
            </div>
            <div>
                <label>News Domains</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='domains'
                    placeholder='example.com'
                />
            </div>
            <div>
                <label>Exclude News Domains</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='excludeDomains'
                    placeholder='example.com'
                />
            </div>
            <div>
                <label>News From Date</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='from'
                    placeholder='2021-22-05'
                />
            </div>
            <div>
                <label>News To Date</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='to'
                    placeholder='2021-22-05'
                />
            </div>
            <div>
                <label>Language</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='language'
                    placeholder='en'
                />
            </div>
            <div>
                <label>Sort By</label>
                <select
                    defaultValue='publishedAt'
                    onChange={(e) => handleChange(e)}
                    name='sortBy'
                >
                    <option value='publishedAt'>Published At</option>
                    <option value='relevancy'>Relevance</option>
                    <option value='popularity'>Popularity</option>
                </select>
            </div>
        </>
    );
};

export default AllNewsFilters;
