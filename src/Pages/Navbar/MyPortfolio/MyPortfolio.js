import React from 'react';
import './MyPortfolio.css'
const MyPortfolio = () => {
    return (
        <>
            <div className='portFolio'>
                <div>
                    <h1 className='text-6xl font-bold text-green-700 my-7'>Hello, My <br />name is <span className='text-orange-500'>Kabbo Kazi</span></h1>
                    <p class="py-6 text-2xl">I am a junior Front-end Web-Developer From <span className='text-purple-500'>"Programming Hero"</span>.</p>

                </div>
                <div>
                    <img src="https://www.linkpicture.com/q/kisspng-web-development-software-developer-mobile-app-deve-designer-5ac2d58b8d0d65.5065728615227180915778.png" />
                </div>

            </div>
            <div className='my-10'>
                <p><span className='text-blue-500'>Educational Qualification:</span> I am studying at  Rajendra college in BBA accounting (hons fourth year) </p>
                <p><span className='text-blue-500'>Email Address: </span> kabbokazi3779@gamil.com</p>
                <ul>
                    <li>Skills</li>
                    <li>JavaScript all Basic</li>
                    <li>Node js. ans react js</li>
                    <li>React bootstrap react tailwind and plain css</li>
                </ul>
                <h4>Three live web-site link</h4>
                <p>"https://kabbo-panda.netlify.app/"</p>
                <p>"https://festive-wiles-5114f0.netlify.app/" </p>
                <p>"https://celadon-granita-aec4f8.netlify.app/" </p>

            </div>
        </>
    );
};

export default MyPortfolio;