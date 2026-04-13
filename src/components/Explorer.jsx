import { useState } from "react";
import { NavLink } from "react-router-dom";

function Explorer(){
    const [isVisible, setVisible] = useState(true);

    function handleActive(){
        setVisible(!isVisible);
    }
    return(
        <div className="bg-[#252526] h-full w-60 text-[#ADADAD]">
            <h1 className="p-2 font-bold"> Explorer </h1>
            <div className="flex m-2">
                <svg onClick={handleActive} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M18.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293a1 1 0 0 1 1.414 0" /></svg>
                
                <h1 className="pl-2">Portfolio</h1>
                
            </div>
            {isVisible
            ?<div className="flex flex-col">
                <NavLink to='/about' className={({ isActive }) => isActive ? "" : "m-1 ml-3 font-bold"}>
                    About
                </NavLink>
                    <NavLink to='/skills' className={({ isActive }) => isActive ? "" : "m-1 ml-3 font-bold"}>
                    Skills
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? "" : "m-1 ml-3 font-bold"}>
                    Project
                </NavLink>
                <NavLink to='/exp' className={({ isActive }) => isActive ? "" : "m-1 ml-3 font-bold"}>
                    Experience
                </NavLink>
            </div>
            :null
            }
        </div>
    )
}

export default Explorer;