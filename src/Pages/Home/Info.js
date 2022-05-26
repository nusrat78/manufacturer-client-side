import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Info = () => {
    return (
        <div class="hero-content flex-col lg:flex-row-reverse px-32">
            <div class="hero min-h-screen">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" /></div>

            <div>
                <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Info;