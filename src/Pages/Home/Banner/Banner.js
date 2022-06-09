import React from 'react';


const Banner = () => {
    const url2 = "https://www.linkpicture.com/q/electronics-store-poster-banner-design-vector-30729880.jpg";
    return (

        <div>
            <div style={{ backgroundImage: `url(${url2})` }} class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-6xl font-bold text-purple-500">K. K. Electronic And Co..</h1>
                        <p class="py-6 text-2xl">We provide the  quality product with Accessible pice and Best after sales service</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;