import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const PopularTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h1 className='text-xl text-center'>Our Popular Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default PopularTools;