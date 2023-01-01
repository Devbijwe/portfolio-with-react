import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect/dist/core';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Home = (props) => {


new Typewriter(document.getElementById("typeHomeName1"), {
    loop: true,
}).changeCursor('$').typeString('Hello,').changeCursor('|')
.pauseFor(28000)
.deleteAll()

.start();



new Typewriter(document.getElementById("typeHomeName2"), {
    loop: true,
}).changeCursor('$').pauseFor(1000).typeString('I am Shiva Bijwe.').changeCursor('|')
.pauseFor(2500).changeCursor('$')
.deleteChars(12)
.typeString(' a Full-stack Developer.').changeCursor('|')
.pauseFor(2500).changeCursor('$')
.deleteAll()
.start();


   

    return (
        <>
        <div className="min-h-screen  bg-gray-50 flex flex-col justify-center relative overflow-hidden ">
  <div className="max-w-7xl w-full  md:w-1/2 h-fit  mx-auto md:m-0">
    <div className="relative  group">
      <div className="absolute -inset-1 h-full bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-7 w-full h-screen md:h-secreen md:w-screen py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        {/* <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
        </svg> */}
        <div className="space-y-2 h-fit">
        <h1 className="text-[50px] absolute top-[40%] left-[5%] text-slate-800 my-5  font-bold " id="typeHomeName1" >Hello,</h1>
        <h3 className="text-[30px] absolute top-[55%] left-[10%] my-5  text-slate-800 font-bold " id="typeHomeName2" >I am Shiva Bijwe.</h3>
          {/* <p className="text-slate-800">Learn how to make a glowing gradient background!</p> */}
          {/* <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a> */}
        </div>
      </div>
    </div>
  </div>
</div>
{/* <div className="bg-gray-300 flex justify-center items-center h-screen">
  <div className=" p-10 h-full  rounded-lg shadow-md" >
    <div className="container my-[25vh] mx-auto relative ">
    <h1 className="text-xl  my-5 text-left font-bold " id="typeHomeName1" >Hello,</h1>
    <h1 className="text-xl my-5  font-bold " id="typeHomeName2" >I am Shiva Bijwe</h1>
    <div className="mt-4 mb-10">
      <p className="text-gray-600" id='typeHomeName2'>Course 75% completed</p>
      <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
        <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
      </div>
    </div>
     </div></div>
</div> */}


        
        </>
    );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;