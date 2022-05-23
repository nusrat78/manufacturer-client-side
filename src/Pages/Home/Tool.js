import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, images } = tool;
    const navigate = useNavigate();
    const navigateDetail = id => {
        navigate(`/tool/${id}`);
    }
    return (
        <div >
            <div class="card  lg:max-w-lg mx-auto bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={images} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button onClick={() => navigateDetail(_id)} class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tool;