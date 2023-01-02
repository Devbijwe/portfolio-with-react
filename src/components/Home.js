import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
// import styled from 'styled-components';




/**
 * 
 */
const Home = (props) => {
  const el1 = useRef(null);
  const el2 = useRef(null);
  useEffect(() => {
  
    const typed2 = new Typed(el2.current, {
      strings: [" ","I am Shiva Bijwe.", "I am a Full-stack Developer."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: ""
    });

    // Destropying
    return () => {
     
      typed2.destroy();
    };
  }, []);




   

    return (
        <>
        {/* <div className="min-h-screen  flex flex-col justify-center relative overflow-hidden ">
  <div className=" w-screen h-fit  mx-auto md:m-0">
    <div className="relative  group"> */}
      {/* <div className={"absolute -inset-1 my-0 py-0  h-full w-full rounded-lg blur  opacity-100  group-hover:opacity-90 transition duration-1000 group-hover:duration-200 " + (props.theme==="dark"? "bg-[#042743]":"bg-gradient-to-r  from-purple-600 to-pink-600")}></div> */}
      <div className={"relative px-7 w-full h-screen md:h-secreen      leading-none flex items-top justify-start space-x-6 " + (props.theme==="dark"? " bg-gradient-to-r  from-[#042743] to-[#552743] text-gray-400 text-gray-300":"bg-gradient-to-r  from-purple-600 to-pink-600 text-gray-800") }>
        {/* <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
        </svg> */}
        <div className="space-y-2 h-fitflex flex-col mt-2 gap-2 ">
        <h1 className="text-[50px] absolute top-[30%] left-[5%] md:left-[35%] my-5  font-bold " id="typeHomeName1" ref={el1}>Hello,</h1>
        <h3 className="text-[25px] absolute top-[45%] left-[10%] md:left-[40%] my-5   font-bold " id="typeHomeName2" ref={el2}> </h3>
          {/* <p className="text-slate-800">Learn how to make a glowing gradient background!</p> */}
          {/* <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a> */}
        </div>
      </div>
    {/* </div>
  </div>
</div> */}
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


// #endregion

export default Home;