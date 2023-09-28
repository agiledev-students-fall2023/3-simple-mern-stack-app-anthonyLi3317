import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    
    const [data, setData] = useState(null);

    if (!data) {
        fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
            .then(res => res.json()) 
            .then(data => setData(data)) 
            .catch(err => console.error(err));
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.imageUrl} alt="myself" />
            {data.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    );
}

export default AboutUs;