// import useState hook to use state in our component
import React, { useState } from 'react';

// use react-router-dom to import routing components
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// import components for news UI
import UkNews from './pages/uk-news/UkNews';
import AllNews from './pages/all-news/AllNews';

// import error boundary to wrap our app and handle errors if that happens and show a fallback UI
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

// import component styles
import './App.scss';

const App = () => {
    // create showLoader state and setLoader state setting handler, default to false
    const [showLoader, setLoader] = useState(false);

    // return our component skeleton with routing and error boundary
    // we are using 2 routes, one for uk headlines and other for everything
    return (
        <Router>
            <div className='app'>
                <header className='header'>
                    <div className='link-tabs'>
                        <Link to='/'>UK News</Link>
                    </div>
                    |
                    <div>
                        <Link to='/all-news/'>All News</Link>
                    </div>
                </header>
                <div className='container'>
                    {showLoader ? (
                        <div className='overlay'>
                            <img src={`${window.location.origin}/loader.gif`} />
                        </div>
                    ) : null}
                    <ErrorBoundary>
                        <Route exact path='/'>
                            <UkNews setLoader={setLoader} />
                        </Route>
                        <Route exact path='/all-news/'>
                            <AllNews setLoader={setLoader} />
                        </Route>
                    </ErrorBoundary>
                </div>
                <footer className='footer'></footer>
            </div>
        </Router>
    );
};
// export our app component
export default App;
