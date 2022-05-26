import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    const [user, loading, error] = useAuthState(auth);

    const handlePurchase = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const OrderQuantity = document.getElementById('orderQuantity');
        const totalPrice = quantity * `${tool.price}`
        console.log(quantity);
        const purchasing = {
            toolId: tool._id,
            toolName: tool.name,
            buyer: user.displayName,
            buyerEmail: user.email,
            quantity,
            totalPrice,
            available: tool.available,

        }


        fetch('http://localhost:5000/purchasing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasing)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast(`${quantity} pcs ${tool.name} and Total price= ${totalPrice} of your order done `)
                OrderQuantity.value = '';
            });

    }




    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])



    return (
        <div >
            <div className="card  lg:max-w-lg mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={tool.images} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p>Minimum order quantity: <span>{tool.minimum}</span> </p>
                    <p>Available Tools: <span>{tool.available}</span></p>
                    <p>${tool.price} per {tool.name}</p>
                </div>
            </div>

            <div className='mt-12'>
                <h1 className='text-center text-2xl mb-5' text-secondary>Purchase the quantity you want!</h1>
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center'>
                    <input type="text" disabled value={tool.name} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="number" min={`${tool.minimum}`} name="quantity" placeholder="Fill order quantity" id="orderQuantity" className="input input-bordered w-full max-w-xs" required
                    />
                    <input type="submit" value="Done" className="input input-bordered w-full max-w-xs" />
                </form>
            </div>
        </div>


    );
};

export default Purchase;