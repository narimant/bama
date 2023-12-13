

import Image from "next/image";
import background from "@public/images/background.jpg"
import { useState } from "react";

const HomeHeader = () => {
    const [blur,setBlur]=useState(false);
    const blurActive=()=>{
        setBlur(()=>!blur)
    }
    return (
        <>
        
        
     
        <div className=" relative flex justify-center">
     
        <div className="flex justify-center items-center h-[calc(100svh-128px)] overflow-hidden">
        <Image src={background} alt="Some text" />
        </div>
        <div onClick={blurActive} className="w-3/5 h-28 bg-white text-black z-10  absolute -bottom-10 border-gray-200 border flex justify-between">
        <div>

        </div>
            <div>

            </div>
            <div>

            </div>
        </div>
        </div>
      <div onClick={blurActive} className={`${!blur && 'hidden'}  inset-0 fixed z-20  backdrop-blur-md flex justify-center items-center`}>

            <div className="bg-white w-1/5 h-3/4 shadow-md z-30 border border-spacing-20">
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
      </div>

      </>
    );
};

export default HomeHeader;