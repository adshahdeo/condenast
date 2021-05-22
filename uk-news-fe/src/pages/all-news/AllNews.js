// import useState to use state in our component
import React, { useState } from 'react';

// import page sub-components
import Search from '../../components/search/Search';
import Results from '../../components/results/Results';
import Message from '../../components/message/Message';

// create our component with setLoader prop
const AllNews = ({ setLoader }) => {
    // create filter state and set default values with setFilters state setting handler
    const [filters, setFilters] = useState({
        q: '',
        qInTitle: '',
        sources: '',
        domains: '',
        excludeDomains: '',
        from: '',
        to: '',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: '10',
        page: 1
    });
    // create results state and set default to [], with setResults state setting handler
    const [results, setResults] = useState([]);
    // create totalResults state and set default to [], with setTotalResults state setting handler
    const [totalResults, setTotalResults] = useState([]);
    // create message state and set default to '', with setMessage state setting handler
    const [message, setMessage] = useState('');
    // return our component skeleton
    return (
        // call components and pass props, using currentPage prop to know which page are on without using any other hook
        <>
            <h1 className='page-title'>All News</h1>
            <Search
                setResults={setResults}
                setMessage={setMessage}
                filters={filters}
                setFilters={setFilters}
                totalResults={totalResults}
                setTotalResults={setTotalResults}
                currentPage={'all-news'}
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
                currentPage={'all-news'}
                setLoader={setLoader}
            />
        </>
    );
};

// export our AllNews component
export default AllNews;
