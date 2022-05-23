import React from 'react';


const Banner = () => {
    const url2 = "https://www.linkpicture.com/q/computer-service-concept-banner-header-vector-23942574.jpg";
    return (

        <div>
            <div style={{ backgroundImage: `url(${url2})` }} class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold text-green-800">K. K. Electronic And Co..</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;