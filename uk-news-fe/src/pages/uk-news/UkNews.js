import React, { useState } from 'react';

import Search from '../../components/search/Search';
import Results from '../../components/results/Results';
import Message from '../../components/message/Message';

const UkNews = ({ setLoader }) => {
    const [filters, setFilters] = useState({
        q: '',
        country: '',
        category: '',
        sources: '',
        pageSize: '10',
        page: 1
    });
    const [results, setResults] = useState([]);
    const [totalResults, setTotalResults] = useState([]);
    const [message, setMessage] = useState('');

    return (
        <>
            <h1 className='page-title'>UK News</h1>
            <Search
                setResults={setResults}
                setMessage={setMessage}
                filters={filters}
                setFilters={setFilters}
                totalResults={totalResults}
                setTotalResults={setTotalResults}
                setLoader={setLoader}
            />
            <Message message={message} />
            <Results
                results={results}
                setResults={setResults}
                setMessage={setMessage}
                filters={filters}
                setFilters={setFilters}
                totalResults={totalResults}
                setTotalResults={setTotalResults}
                setLoader={setLoader}
            />
        </>
    );
};

export default UkNews;
