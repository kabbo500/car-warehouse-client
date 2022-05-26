import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-info d-flex justify-content-center mb-5 text-4xl font-bold'>Blogs Page</h1>
            <article>
                <h3 className='text-primary mt-4 text-3xl'>1) How will you improve the performance of a React Application?</h3>
                <div>
                    <p><b>No-1: Use Production Build</b> First way of optimizing a React app is by making sure you bundle the app for production before deploying. By default, the app is in development mode, which means React will include helpful warnings. This can be very useful while it's developing, but it can make the app size large and responses slower than usual </p>
                </div>
                <div>
                    <p><b>No-2: Use React.Lazy for Lazy Loading Components</b>Lazy loading is a great technique for optimizing and speeding up the render time of your app. The idea of lazy loading is to load a component only when it is needed. </p>

                </div>
                <div>
                    <p><b>No-3: Use React.memo for Component Memoization</b>
                        React.memo is a great way of optimizing performance as it helps cache functional components.In computing, memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
                    </p>

                </div>
                <div>
                    <p><b>No-4: Virtualize a Large List Using react-window</b>
                        When you want to render an enormous table or list of data, it can significantly slow down your app's performance. Virtualization can help in a scenario like this with the help of a library like react-window. react-window helps solve this problem by rendering only the items in the list that are currently visible, which allows for efficiently rendering lists of any size.
                    </p>

                </div>

            </article>
            <article>
                <h3 className='text-primary mt-4 text-3xl'>
                    2) What are the different ways to manage a state in a React application?
                </h3>
                <p> <b>Ans:</b> First we need to know , what is react state.React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.
                    The state is just a fancy term for a JavaScript data structure.The built-in setState() method updates a variable's value in the classes' local store. This local store allows the updated variable values to be accessed by any function that may require these values.Hooks is one of the most outstanding features ever added to the React library since its creation. Hooks brought 'state' to functional components.The first on our list is Redux; It has been around for a while, pretty much the first react-based state management library.
                    The state management library Redux was created to address the problem in our eCommerce app.</p>


            </article>
            <article>
                <h3 className='text-primary mt-4 text-3xl'>3) How does prototypical inheritance work?</h3>
                <p> <b>Ans:</b> JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                    JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                    Prototypal inheritance is a language feature that helps in that.When we read a property from object, and it's missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we'll study many examples of such inheritance, as well as cooler language features built upon it.</p>
            </article>
            <article>
                <h3 className='text-primary mt-4 text-3xl'>4) What is a unit test? Why should write unit tests?</h3>
                <p> <b>Ans:</b>
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                    A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                    Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.
                    The earlier a problem is identified, the fewer compound errors occur.
                    Costs of fixing a problem early can quickly outweigh the cost of fixing it later.
                    Debugging processes are made easier.
                    Developers can quickly make changes to the code base.
                    Developers can also re-use code, migrating it to new projects.

                </p>
            </article>

        </div>
    );
};

export default Blogs;