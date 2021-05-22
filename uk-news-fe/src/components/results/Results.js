import React from 'react';
// import axios for ajax call
import axios from 'axios';
// import our component style
import './Results.scss';
// create Results component with props
const Results = ({
    results,
    setResults,
    setMessage,
    filters,
    setFilters,
    currentPage,
    totalResults,
    setTotalResults,
    setLoader
}) => {
    // handle load more button click to load next page data
    const loadMore = (e) => {
        // copy our filters state so that we don't end up changing it
        const newFilters = filters;
        // increment page number
        newFilters.page++;
        // set filters with new page value
        setFilters(newFilters);
        // make search API call
        searchMore();
    };
    // search API call
    const searchMore = () => {
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
                    // copy our current page data and next page data in same array by spread
                    const moreResults = [...results, ...res.data.articles];
                    // set state of results
                    setResults(moreResults);
                    // set total results to show the number of results
                    setTotalResults(res.data.totalResults);
                    // based on length of result, decide what message to show
                    res.data.articles.length
                        ? setMessage(
                              `Showing ${moreResults.length} of ${res.data.totalResults}`
                          )
                        : setMessage(
                              'No search results found, please search with different parameters'
                          );
                    // our ajax call is completed, now stop showing the loader and return
                    setLoader(false);
                    return;
                    // error param is set
                } else {
                    // check if required params are missing
                    if (res.data.code === 'missingParams') {
                        // show adequate message received from API
                        setMessage(res.data.message);
                    }
                    // set empty array as results
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
    return (
        <>
            <ul>
                {results.map((article, i) => {
                    return (
                        <li className='results-list' key={`atricle-${i}`}>
                            <div className='article-preview'>
                                <div className='title-container'>
                                    <p className='article-title'>
                                        <b>{article.title}</b>
                                    </p>
                                </div>
                                <div className='right-content-container'>
                                    {article.urlToImage ? (
                                        <img
                                            className='thumbnail'
                                            src={article.urlToImage}
                                            alt=''
                                        />
                                    ) : null}
                                    <p className='published-date'>
                                        {article.publishedAt
                                            ? new Date(
                                                  article.publishedAt
                                              ).toUTCString()
                                            : ''}
                                    </p>
                                </div>
                            </div>
                            <div className='full-article'>
                                <p className='article-description'>
                                    {article.description
                                        ? article.description
                                              .replace(/&quot;/g, '"')
                                              .replace(/&amp;/g, '&')
                                              .replace(/<\/?[^>]+(>|$)/g, '')
                                        : ''}
                                </p>

                                {article.content ? (
                                    <p className='article-content'>
                                        {article.content
                                            .slice(
                                                0,
                                                article.content.indexOf('[+')
                                            )
                                            .replace(/&quot;/g, '"')
                                            .replace(/&amp;/g, '&')
                                            .replace(/<\/?[^>]+(>|$)/g, '')}
                                    </p>
                                ) : (
                                    ''
                                )}
                                <div className='bottom'>
                                    <a
                                        rel='noopener noreferrer'
                                        href={article.url}
                                        target='_blank'
                                        className='article-link'
                                    >
                                        [+ more]
                                    </a>
                                    <p className='author-name'>
                                        {article.source?.name
                                            ? ` -  ${article.author}`
                                            : ``}
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {parseInt(totalResults) -
                parseInt(filters.pageSize * filters.page) <=
            0 ? null : (
                <div className='load-more-container'>
                    <button onClick={(e) => loadMore(e)}>LOAD MORE</button>
                </div>
            )}
        </>
    );
};

export default Results;
