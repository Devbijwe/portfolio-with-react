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
const Projects = () => {
    return (
<>
    <div className="h-screen flex  md:text-sm  text-[11px] font-black h-full py-5 items-center justify-center">
      <div className="grid grid-cols-12 gap-2  gap-y-4 max-w-6xl">
      <div className="col-span-12 p-5 ">
      <h1 className="text-xl  text-center  font-bold " >My Projects</h1>
      </div>
        <div className="col-span-12 p-5  sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full  flex flex-col">
            <div className="relative">         
              <a href="https://github.com/Devbijwe/flask-news-web" target="_blank" rel="noreferrer">
                <img src={IZNews} className="w-full h-auto" alt='' />
              </a>
              <h1 className="absolute top-[30%] text-2xl  left-[40%] text-center ">IZ-News</h1>
              <p className="absolute top-[45%] left-[5%] " >(HTML,CSS,Javascripts,Bootstrap,Python(Flask),jinja2,MySql)</p>
              {/* <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p> */}
            </div>
          </card>
        </div>
        <div className="col-span-12 p-5 sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full  flex flex-col">
            <div className="relative">         
              <a href="https://github.com/Devbijwe/Allora" target="_blank" rel="noreferrer">
                <img src={Allora} className="w-full h-auto" alt='' />
              </a>
              <h1 className="absolute top-[30%] text-2xl  left-[40%] text-center  ">Allora</h1>
              <p className="absolute top-[45%] left-[5%]  " >(HTML,CSS,Javascripts,Bootstrap,Python(Flask),jinja2,MySql)</p>
              {/* <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p> */}
            </div>
          </card>
        </div>  
        <div className="col-span-12 p-5 sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full flex flex-col">
            <div className="relative">         
              <a href="https://github.com/Devbijwe/memerkida" target="_blank"rel="noreferrer">
                <img src={Memerkida} className="w-full h-auto"  alt=''/>
              </a>
              <h1 className="absolute top-[30%] text-2xl  left-[40%] text-center    ">Memekida</h1>
              <p className="absolute top-[45%] left-[5%]    " >(HTML,CSS,Tailwind-CSS,Javascripts,JQuery, Python(Flask),jinja2,MySql)</p>
              {/* <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p> */}
            </div>
          </card>
        </div> 
         <div className="col-span-12 p-5 text-gray-300  sm:col-span-12 md:col-span-6 my-10">
          <card className="md:w-full  flex flex-col">
            <div className="relative">         
              <a href="https://github.com/Devbijwe/React-textUtils" target="_blank" rel="noreferrer">
                <img src={TextUtils} className="w-full h-auto"  alt=''/>
              </a>
              <h1 className="absolute top-[30%]  text-2xl left-[40%] text-center    ">Text-Utils</h1>
              <p className="absolute top-[45%] left-[40%]" >(ReactJS)</p>
              <a className='absolute top-[60%] underline text-blue-600 left-[40%]'target="_blank"rel="noreferrer" href="https://devbijwe.github.io/React-textUtils/">Demo</a>
              {/* <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p> */}
            </div>
          </card>
        </div>
    
{/*   
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <card className="w-full flex flex-col">
            <div className="relative">
    
            
              <a href="#">
                <img src="https://picsum.photos/seed/60/300/200" className="w-96 h-auto" />
              </a>
    
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
            </div>
    
            <div className="flex flex-row mt-2 gap-2">
    
              <a href="#">
                <img src="https://picsum.photos/seed/4/40/40" className="rounded-full max-h-10 max-w-10" />
              </a>
    
           
              <div clas="flex flex-col">
                <a href="#">
                  <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                </a>
                <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
              </div>
    
            </div>
          </card>
        </div>
    
   
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <card className="w-full flex flex-col">
            <div className="relative">
    
            
              <a href="#">
                <img src="https://picsum.photos/seed/22/300/200" className="w-96 h-auto" />
              </a>
    
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
            </div>
    
            <div className="flex flex-row mt-2 gap-2">
              
           
              <a href="#">
                <img src="https://picsum.photos/seed/88/40/40" className="rounded-full max-h-10 max-w-10" />
              </a>
    
         
              <div clas="flex flex-col">
                <a href="#">
                  <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                </a>
                <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
              </div>
    
            </div>
          </card>
        </div>
    
  
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <card className="w-full flex flex-col">
            <div className="relative">
    
       
              <a href="#">
                <img src="https://picsum.photos/seed/90/300/200" className="w-96 h-auto" />
              </a>
    
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
            </div>
    
            <div className="flex flex-row mt-2 gap-2">
              
          
              <a href="#">
                <img src="https://picsum.photos/seed/57/40/40" className="rounded-full max-h-10 max-w-10" />
              </a>
    
           
              <div clas="flex flex-col">
                <a href="#">
                  <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                </a>
                <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
              </div>
              
            </div>
          </card>
        </div> */}
      </div>
    </div>
   
  </>
  );
}

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;
// #endregion

export default Projects;