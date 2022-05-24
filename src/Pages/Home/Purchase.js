import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])


    return (
        <div >
            <div class="card  lg:max-w-lg mx-auto bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={tool.images} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>

    );
};

export default Purchase;