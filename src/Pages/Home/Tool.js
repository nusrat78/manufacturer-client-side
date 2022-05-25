import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, images, description, minimum, available, price } = tool;
    const navigate = useNavigate();
    const navigateDetail = id => {
        navigate(`/tool/${id}`);
    }
    return (
        <div >
            <div className="card  lg:max-w-lg mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={images} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum order quantity: <span>{minimum}</span> </p>
                    <p>Available Tools: <span>{available}</span></p>
                    <p>${price} per {name}</p>
                    <div className="card-actions">
                        <button onClick={() => navigateDetail(_id)} className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tool;