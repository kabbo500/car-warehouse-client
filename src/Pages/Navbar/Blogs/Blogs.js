import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-info d-flex justify-content-center mb-5'>Blogs Page</h1>
            <article>
                <h3 className='text-primary mt-4 text-3xl'>1) Difference between javascript and nodejs ?</h3>
                <div>
                    <p><b>Ans: <br /> </b> No-1: Javascript is a programming language.It is used for writing scripts for the website. </p>
                    <p>While, NodeJS is a Javascript runtime environment</p>
                </div>
                <div>
                    <p><b>No-2:</b>  Javascript can only be run in the browsers.</p>
                    <p>But Javascript can run  outside the browser with the help of NodeJS.</p>
                </div>
                <div>
                    <p><b>No-3: </b>Javascript is capable enough to add HTML and play with the DOM.
                    </p>
                    <p>Nodejs does not have capability to add HTML tags.</p>
                </div>
                <div>
                    <p><b>No-4</b>
                        Javascript is used in frontend development.
                    </p>
                    <p>Mostly Nodejs is used in server-side development.</p>
                </div>
                <div>
                    <p><b>No-5</b>Javascript run with firefox safari and google chrome</p>
                    <p>Node js run with google chrome v8 </p>
                </div>
            </article>
            <article>
                <h3 className='text-primary mt-4 text-3xl'>
                    2)  When should you use nodejs and when should you use mongodb?
                </h3>
                <p><b>Ans:</b> <b>Node js:</b>Node.js is one of the most popular environments, taking the lead for the second consecutive year.Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language.  </p>

                <p><b>mongodb</b> MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data sin a database. There are many web servers built with nodejs that will then use MongoDB for storing data.Suppose I am building a website and I need a database to store the data or information so here I can use MongoDB but to be connected with MongoDB </p>

            </article>
            <article>
                <h3 className='text-primary mt-4 text-3xl'>3)  What is the purpose of jwt and how does it work?</h3>
                <p> <b>Ans:</b> JWT full meaning JSON Web Token.It is an open standard used to share security information between two parties — a client and a server. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties.What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.When it comes to APIs, JWTs are the standard. They offer a compact and safe method of information exchange without the need for a centralized token database.</p>
            </article>

        </div>
    );
};

export default Blogs;