import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';




// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


/**
 * 
 */
const Navbar = (props) => {
    
const [theme, setTheme] = useState("dark");
;
const handleClicktheme=()=>{
    if (theme==="dark"){
        setTheme("light");
        document.body.style.backgroundColor="white";

    }else{
        setTheme("dark");
        document.body.style.backgroundColor="#042743";
    }


};


    return (
    <>

<nav className={"navigation shadow fixed z-10 w-screen " +(theme==="dark"?  "bg-gray-900":"bg-slate-300")} id="nav">
    <div className={"container flex items-center justify-center p-6 mx-auto  capitalize  "  +(theme==="dark"?  "text-gray-300": "text-gray-800")}>
        <a href="#home" id='navItem1'   className="navItem hover:text-gray-800 dark:text-gray-200 border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6">home</a>

        <a href="#skills" id='navItem2'   className="navItem border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">My Skills</a>

        <a href="#projects" id='navItem3'   className="navItem border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

        <a href="#contacts" id='navItem4'  className="navItem border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contacts</a>
      
        <div
        onClick={handleClicktheme}
      className="md:w-14 md:h-7 w-10 h-5 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer"
    >
 
      <div
      
        className = {" md:w-6 md:h-6 h-4 w-4 rounded-full shadow-md  " + (theme==="dark"? " transform translate-x-5 bg-gray-900":" bg-red-600")}
      ></div>
    </div>
    </div>
</nav>
   
    

<div  className={"top-page"}    id="home" >
<Home  theme={theme} />
</div>

<div  className="page green text-center"  id="skills">
<Skills  theme={theme} />
</div> 
<div  className=""  id="projects">
<Projects  theme={theme}/>
</div> 

<div className=""  id="contacts">
<Contact  theme={theme}/>
</div>

    
    </>
    );
}

// Navbar.propTypes = propTypes;
// Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;