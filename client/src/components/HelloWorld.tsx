import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorld: React.FC = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/hello')
        .then((response) => {
            setMessage(response.data.message);
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
