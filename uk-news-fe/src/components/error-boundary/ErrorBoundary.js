import React from 'react';
// import our component style
import './ErrorBoundary.scss';
// create error boundary class by inheriting from React.Component
class ErrorBoundary extends React.Component {
    // initialize our component
    constructor() {
        super();
        this.state = {
            error: false
        };
    }

    // Get state from error and set to true, since error ocurred
    static getDerivedStateFromError(err) {
        return { error: true };
    }

    // catch the error and set the state for error for rendering
    componentDidCatch(err, info) {
        this.setState({ error: true });
    }

    // render our error boundary fallback in case of error
    render() {
        return (
            <div className='error-boundary'>
                {this.state.error ? (
                    <h2 className='error-msg'>
                        Something went Wrong! Please try after some time
                    </h2>
                ) : (
                    this.props.children
                )}
            </div>
        );
    }
}

export default ErrorBoundary;
