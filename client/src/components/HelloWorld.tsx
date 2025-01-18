import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const HelloWorld: React.FC = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        apiService.getText()
        .then((response) => {
            setMessage(response);
        })
        .catch((error) => {
            console.error('Error fetching message. ', error);
        });

    }, []);
    
    return (
    <div>
        <h1>Message fetched from the back end server:</h1>
        <p>{message}</p>
    </div>
  );
};

export default HelloWorld;
