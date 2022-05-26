import React from 'react';
import flag from '../../assets/icon/flag.png'
import community from '../../assets/icon/community.png'
import toolicon from '../../assets/icon/toolicon (1).png'

const Business = () => {
    return (
        <div>
            <h1 className='text-6xl text-center'>MILLIONS BUSINESS TRUST US</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div class="card w-96  shadow-xl">
                    <figure><img src={flag} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title" className='text-3xl text-center'>COUNTRIES
                        </h2>
                        <p className='text-3xl text-center'>56</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={community} alt="" /></figure>
                    <div class="card-body">
                        <h2 className='text-3xl text-center' class="card-title">CLIENT
                        </h2>
                        <p className='text-3xl text-center'>346+</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={toolicon} alt="" /></figure>
                    <div class="card-body">
                        <h2 className='text-3xl text-center' class="card-title">MANUFACTURE
                        </h2>
                        <p className='text-3xl text-center'>5k+</p>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Business;