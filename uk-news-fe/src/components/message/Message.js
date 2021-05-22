import React from 'react';
// create Message component that uses message prop and shows it
const Message = ({ message }) => {
    // return our skeleton of Message component
    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};
// export our Message component
export default Message;
