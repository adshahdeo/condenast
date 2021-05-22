import React, { useEffect } from 'react';
import Filters from '../filters/Filters';
import axios from 'axios';
import './Search.scss';

const Search = ({
    setResults,
    setMessage,
    filters,
    setFilters,
    currentPage,
    totalResults,
    setTotalResults,
    setLoader
}) => {
    useEffect(() => {
        search();
    }, []);

    const search = () => {
        // show loader before we start our ajax call
        setLoader(true);
        // create URL based on our current page
        let url = `http://localhost:3001/${currentPage ? currentPage : ''}?`;
        // build URL based on our filters, put values only if they exist
        for (const key in filters) {
            if (filters[key].length) {
                url += `${key}=${filters[key]}&`;
            }
        }
        // make ajax call and handle in callback
        axios
            .get(url)
            .then((res) => {
                // ajax succeeded
                // error param is not set
                if (!res.data.error) {
                    // set state of results
                    setResults(res.data.articles);
                    // set total results to show the number of results
                    setTotalResults(res.data.totalResults);
                    // based on length of result, decide what message to show
                    res.data.articles.length
                        ? setMessage(
                              `Showing ${res.data.articles.length} of ${res.data.totalResults}`
                          )
                        : setMessage(
                              'No search results found, please search with different parameters'
                          );
                    // our ajax call is completed, now stop showing the loader and return
                    setLoader(false);
                    return;
                } else {
                    // check if required params are missing
                    if (res.data.code === 'missingParams') {
                        // show adequate message received from API
                        setMessage(res.data.message);
                    }
                    setResults([]);
                    // our ajax call is completed, now stop showing the loader and return
                    setLoader(false);
                    return;
                }
            })
            .catch((err) => {
                // ajax call has failed, set adequate message
                setMessage(
                    'It seems like some error ocurred with current set of parameters, please try again with some other values'
                );
                // our ajax call is completed, now stop showing the loader and return
                setLoader(false);
                return;
            });
    };
    // Form submit handler
    const handleSearch = (e) => {
        // stop page from reloading
        e.preventDefault();
        // call search
        search();
    };
    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <Filters
                filters={filters}
                setFilters={setFilters}
                currentPage={currentPage}
            />
            <div className='load-more-container'>
                <button>GET NEWS</button>
            </div>
        </form>
    );
};

export default Search;
