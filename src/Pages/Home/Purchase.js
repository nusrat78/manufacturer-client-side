import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        const url = `tools.json/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])


    return (
        <div>
            <img src={tool.images} alt=""></img>
            <h2>{tool.name}</h2>

        </div>
    );
};

export default Purchase;