

import Image from "next/image";
import background from "@public/images/background.jpg"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { ImFilter } from "react-icons/im";

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
        <div  className="w-3/5 h-28 bg-white text-black z-10  absolute -bottom-10 border-gray-200 border grid grid-cols-3">
        <div className="flex justify-center items-start w-full flex-col pr-6">
            <p className="flex justify-between w-60 items-center text-base font-bold cursor-pointer" onClick={blurActive}>
                <span>برند و مدل</span>
                <IoIosArrowDown />
            </p>
            <p className="text-xs">تمام برندها و مدل ها</p>
        </div>
            <div className="flex justify-center items-center">
            <div class="slider"><input type="range" min="0" max="200" value="100" oninput="rangeValue.innerText = this.value" className="w-full" /><p id="rangeValue">100</p></div> 
   
            </div>
            <div className="flex justify-center items-center">
                <Link href=""  className="bg-lime-400 flex items-center gap-2 py-3 px-6 rounded-3xl font-bold">
                <ImFilter />
                   <span> نمایش آگهی ها (2 فیلتر)</span>
                    </Link>
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