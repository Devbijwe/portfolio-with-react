import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Skills = (props) => {

    return (
        <>

<div className=" flex justify-center items-center h-fit">
    <div className={"p-10 h-full w-full shadow-md "  + (props.theme==="dark"? "bg-[#0C2060] text-gray-200":" bg-gradient-to-r  from-[#F3904F] to-[#3B4371]")}>
    <h1 className="text-xl  my-5 text-center font-bold mb-10" >My Skills</h1>
    <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
    <h1 className="text-xl font-bold text-left md:pl-[15%]">HTML</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400  mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
          <div className={"w-[85%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>HTML</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left  rounded-lg mt-1'>85%</span>
      </div>  

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
      <h1 className="text-xl font-bold text-left md:pl-[15%]">CSS</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
          <div className={"w-[85%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>CSS</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>80%</span>
      </div>

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
      <h1 className="text-xl font-bold text-left md:pl-[15%]">Tailwind CSS</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
          <div className={"w-[85%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>Tailwind CSS</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>80%</span>
      </div> 

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
      <h1 className="text-xl font-bold text-left md:pl-[15%]">BootStraps</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
        <div className={"w-[90%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>BootStraps</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>90%</span>
      </div>  

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
      <h1 className="text-xl font-bold text-left md:pl-[15%]">JavaScript</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
          <div className={"w-[85%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>JavaScript</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>80%</span>
      </div>  

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
      <h1 className="text-xl font-bold text-left md:pl-[15%]">ReactJS</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
        <div className={"w-[65%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>ReactJS</b>  </div>
        </div>
        <span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>65%</span>
      </div>  

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
      <h1 className="text-xl font-bold text-left md:pl-[15%]">NodeJS</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
        <div className={"w-[75%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>NodeJS</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>75%</span>
      </div>  

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/><h1 className="text-xl font-bold text-left md:pl-[15%]">MySQL</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
          <div className={"w-[85%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>MySQL</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>80%</span>
      </div>  

      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
     <h1 className="text-xl font-bold text-left md:pl-[15%]">Python (Flask)</h1>
     <div className="mt-4 flex mb-10">
       <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
       <div className={"w-[90%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>Python (Flask)</b>  </div>
       </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>90%</span>
     </div>  

       <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
      <h1 className="text-xl font-bold text-left md:pl-[15%]">C++</h1>
      <div className="mt-4 flex mb-10">
        <div className="bg-gray-400 mx-auto w-9/12 h-4 md:w-6/12 rounded-lg mt-2 overflow-hidden">
        <div className={"w-[55%] h-full rounded-lg shadow-md text-left text-xs pl-6 " + (props.theme==="dark"? "bg-orange-900" :"bg-pink-400")}><b>C++</b>  </div>
        </div><span className='w-2/12 md:w-2/12 text-left rounded-lg mt-1'>55%</span>
      </div>  
     
     
      <hr className='my-5 bg-gray-400 mx-auto h-[2px] w-sceen md:w-9/12'/>
     
      </div>
  </div>




        
        </>
    );
}

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;
// #endregion

export default Skills;