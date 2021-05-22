// import useRef hook to use ref in our component
import React, { useRef } from 'react';
// import specific filters, we'll load them on basis of which page we are on
import UkNewsFilters from './uk-news-filters/UkNewsFilters';
import AllNewsFilters from './all-news-filters/AllNewsFilters';

// import component style
import './Filters.scss';

// create our Filters component with props
const Filters = ({ filters, setFilters, currentPage }) => {
    // create ref for source field, since it has different behaviour for different pages
    const sourcesFieldRef = useRef();
    // create handleChange function to set filters in state and manage behaviour of different pages in same component
    const handleChange = (e) => {
        // copy filters to our object, so that we don't make changes to original state
        const newFilters = filters;
        // store target element
        const target = e.target;
        // everything API needs q and qInTitle to be URL encoded, so check that
        if (target.name === 'q' || target.name === 'qInTitle') {
            if (currentPage === 'all-news') {
                newFilters[target.name] = encodeURI(target.value);
            } else {
                newFilters[target.name] = target.value;
            }
        }
        // in case of uk headlines, sources can't be combined with country or category
        // so we we'll clear sources when we encounter such situation and alert user regarding the same
        if (
            !currentPage &&
            newFilters.sources.length &&
            (newFilters.country.length || newFilters.category.length)
        ) {
            sourcesFieldRef.current.value = '';
            newFilters.sources = '';
            alert(
                "Sources can't be combined with country or category, clearing sources fiter value"
            );
        }
        // everytime filter is set, set the first page in pagination
        newFilters.page = 1;
        // set new state of filters
        setFilters(newFilters);
    };

    return (
        <div className='filters'>
            <div>
                <label>Search in Title or body of the article</label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='q'
                    placeholder='Search Key'
                />
            </div>
            <div>
                <label>
                    News Sources, you can add comma separated sources upto
                    maximum of 20 sources.{' '}
                    {currentPage
                        ? ''
                        : `Can't be combined with country or category`}
                </label>
                <input
                    type='text'
                    onChange={(e) => handleChange(e)}
                    name='sources'
                    placeholder='Enter Source'
                    ref={sourcesFieldRef}
                />
            </div>
            {
                // based on which page we are, we'll render specific filters
                currentPage === 'all-news' ? (
                    <AllNewsFilters handleChange={handleChange} />
                ) : (
                    <UkNewsFilters handleChange={handleChange} />
                )
            }
            <div>
                <label>Page Size</label>
                <select
                    defaultValue='10'
                    onChange={(e) => handleChange(e)}
                    name='pageSize'
                >
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>
            </div>
        </div>
    );
};
// export our Filters component
export default Filters;
