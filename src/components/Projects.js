import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Allora from '../img/Allora.png';
import IZNews from "../img/IZ-News.png";
import Memerkida from "../img/Memerkida.png"
import TextUtils from "../img/Text-Utils.png"

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
const Projects = (props) => {
    return (
<>
    <div className={"h-screen flex  md:text-sm  text-[11px] font-black h-full py-5 items-center justify-center "  + (props.theme==="dark"? " bg-gradient-to-r  bg-gradient-to-r  from-[#652743] to-[#042743] text-gray-100":"bg-gradient-to-r   from-[#3a6186] to-[#89253e] text-gray-900 hover:text-gray-800")}>
      <div className="grid grid-cols-12 gap-2  gap-y-4 max-w-6xl">
      <div className="col-span-12 p-5 ">
      <h1 className="text-xl  text-center  font-bold " >My Projects</h1>
      </div>
        <div className="col-span-12 p-5  sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full  flex flex-col">
            <div className="relative">         
              <a href="https://github.com/Devbijwe/flask-news-web" target="_blank" rel="noreferrer">
                <img src={IZNews} className="w-full h-auto " alt='' />
              </a>
             </div>

<div clas="flex flex-col mt-2 gap-2">
<a href="https://github.com/Devbijwe/flask-news-web" target="_blank" rel="noreferrer">
    <p className=" text-sm text-center font-semibold underline">IZ-News</p>
  </a>
  <div className=" text-xs text-center mt-2 " > (HTML, CSS, Javascripts, Bootstrap, Python(Flask), jinja2, MySql)</div>
</div>

          </card>
        </div>
        <div className="col-span-12 p-5 sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full  flex flex-col">
            <div className="relative">         
              <a href="https://github.com/Devbijwe/Allora" target="_blank" rel="noreferrer">
                <img src={Allora} className="w-full h-auto" alt='' />
              </a>
             </div>
        
<div clas="flex flex-col mt-2 gap-2 ">
<a href="https://github.com/Devbijwe/Allora" target="_blank" rel="noreferrer">
    <p className=" text-sm text-center font-semibold underline">Allora</p>
  </a>
  <div className=" text-xs text-center mt-2 " > (HTML, CSS, Javascripts, Bootstrap, Python(Flask), jinja2, MySql)</div>
</div>

          </card>
        </div>  
        <div className="col-span-12 p-5 sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full flex flex-col">
            <div className="relative">         
              <a href="https://github.com/Devbijwe/memerkida" target="_blank"rel="noreferrer">
                <img src={Memerkida} className="w-full h-auto"  alt=''/>
              </a>
              
            </div>
          
<div clas="flex flex-col mt-2 gap-2 ">
<a href="https://github.com/Devbijwe/memerkida" target="_blank" rel="noreferrer">
    <p className=" text-sm text-center font-semibold underline">Memekida</p>
  </a>
  <div className="text-xs text-center mt-2 " > (HTML, CSS, Tailwind-CSS, Javascripts, JQuery, Python(Flask), jinja2, MySql)</div>
</div>

          </card>
        </div> 

        <div className="col-span-12 p-5 sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full flex flex-col">
            <div className="relative">           
              <a href="https://github.com/Devbijwe/React-textUtils" target="_blank" rel="noreferrer">
                <img src={TextUtils} className="w-full h-auto"  alt=''/>
              </a>
            </div>

<div clas="flex flex-col mt-2 ">
<a href="https://github.com/Devbijwe/memerkida" target="_blank" rel="noreferrer">
    <p className=" text-sm text-center  font-semibold underline">Text-Utils</p>
  </a>

  <div className=" text-xs text-center mt-2  mx-auto" > ( ReactJS )</div>
  <a href="https://devbijwe.github.io/React-textUtils" target="_blank" rel="noreferrer">
  <div className=" text-xs text-center mt-2  mx-auto underline" >Demo</div>
  </a>
</div>
          </card>
        </div>
        <div className="col-span-12 p-5 ">
      <h1 className="text-xl  text-center  font-bold " >Working in Progess on 3 More Projects</h1>
      </div>

      </div>
    </div>
   
  </>
  );
}

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;
// #endregion

export default Projects;