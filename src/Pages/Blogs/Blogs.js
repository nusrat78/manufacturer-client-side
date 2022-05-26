import React from 'react';

const Blogs = () => {
    return (
        <section className='w-auto'>
            <div>
                <h1>1. How will you improve the performance of a React Application? </h1>
                <p>Ans: There are some techniques to improve the performance of a React Application:
                    <p>Keeping component state local where necessary:To ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code.</p>
                    <p>Memoizing React components to prevent unnecessary re-renders:Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.</p>
                    <p>Code-splitting in React using dynamic import():when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.</p>Windowing or list virtualization in React applications
                </p>
                <br />
                <h1>2. What are the different ways to manage a state in a React application?</h1>
                <p>Ans:There are 5 Types of Application State in React and they help in state management.Each type of state follows a set of defined rules and interacts with one another in a particular manner.Communication plays a crucial role in storing information in different states. It covers essential aspects of an application such as loading spinners, error messages, pop-ups, and many others which showcases that a communication link has been formed. Communication state is the “loading phase” of the transactions between different states.Data state covers information that your React application stores temporarily for various business functions.The Data state will receive all the information from the outer world.Control state does not represent the applications environment. Instead, it refers to the state which the user has input into the app.Session state contains information about the user of the application such as user id, permissions, passwords, etc. It may also include information on how the application should work according to a particular users preferences.Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.

                </p>
                <br />
                <h1>3. How does prototypical inheritance work?</h1>
                <p>Ans: prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                <br />
                <h1>4.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <p>Ans: In React, the state is immutable. It means that it should not modify directly.React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly. In some cases not re-rendering at all even though the state has been modified. Instead a new object should be created to set the state using setState.</p>
                <br />
                <h1> 5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>Ans: Search products by name in an array of objects can be done in using a loop, Array.find() or Array.findIndex() methods.
                </p>
                <br />
            </div>
        </section >





    );
};

export default Blogs;