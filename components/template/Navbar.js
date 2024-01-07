"use client"
import Link from "next/link";
import { FaCarRear } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { GrLineChart } from "react-icons/gr";
import { PiEngine } from "react-icons/pi";
import { BsNewspaper } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { PiCarDuotone } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import CarTab from "../modules/MobileTabs/CarTab";
import MotorTab from "../modules/MobileTabs/MotorTab";
import TruckTab from "../modules/MobileTabs/TruckTab";
const Navbar = () => {
const [close,setClose]=useState(false);
const [mobileTab,setMobileTab]=useState('car');
const closeHandler=()=>{
  setClose(!close);
}

  return (
    <div className="w-full  bg-[#FBFBFB]  shadow-md text-center font-Vazirmatn text-base font-medium">
      <div className="container mx-auto flex justify-between  items-center">
        <div>
          <button className="m-3 lg:hidden" onClick={closeHandler}>
            <LuMenu size={30} />
          </button>

          <ul className=" justify-between items-center hidden lg:flex">
            <li className="group ">
              <Link href="/car" className="flex pl-8 py-5 ">
                خودرو
              </Link>

              {/* ----child menu---- */}
              <div className="absolute hidden flex-col z-20 bg-white  w-60 items-center group-hover:flex">
                <div className="flex flex-col p-2 w-full bg-gray-200">
                  <Link
                    href="#"
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <FaCarRear className="w-6 h-6" />
                    <span>خرید خودرو</span>
                  </Link>

                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <IoMdAdd className="w-6 h-6" />
                    <span>ثبت آگهی خودرو</span>
                  </Link>

                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <GrLineChart className="w-6 h-6" />
                    <span>قیمت روز خودرو</span>
                  </Link>
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <PiEngine className="w-6 h-6" />
                    <span> مشخصات فنی خودرو </span>
                  </Link>

                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <BsNewspaper className="w-6 h-6" />
                    <span>اخبار خودرو</span>
                  </Link>
                </div>

                <div className="bg-gray-200 mt-1 w-full font-light text-sm">
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <span>استغلام خلافی خودرو</span>
                    <span className="bg-red-600 text-white text-[10px] px-1 py-0 rounded-md">
                      جدید
                    </span>
                  </Link>
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <span>شرایط فروش خودروسازها</span>
                  </Link>
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <span>ثبت نام نمایشگاه خودرو</span>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/car" className="py-5 px-4">
                موتور سیکلت
              </Link>
            </li>
            <li>
              <Link href="/car" className="py-5 px-4">
                سنگین
              </Link>
            </li>
            <li>
              <Link href="/car" className="py-5 px-4">
                باما
              </Link>
            </li>
          </ul>
        </div>

        <p className="m-3">
          <Link href="/">
            <svg
              viewBox="0 0 81 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8  lg:h-12"
              data-v-5561ece8=""
            >
              <path
                d="M78.5 26.2959H62.5V42.2959H78.5V26.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>
              <path
                d="M18.5 2.2959H2.5V42.2959H18.5V2.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>
              <path
                d="M58.5 2.2959H42.5V42.2959H58.5V2.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>
              <path
                d="M30.5 42.2959C34.9183 42.2959 38.5 38.7142 38.5 34.2959C38.5 29.8776 34.9183 26.2959 30.5 26.2959C26.0817 26.2959 22.5 29.8776 22.5 34.2959C22.5 38.7142 26.0817 42.2959 30.5 42.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>
              <path
                d="M70.5 62.2959C74.9183 62.2959 78.5 58.7142 78.5 54.2959C78.5 49.8776 74.9183 46.2959 70.5 46.2959C66.0817 46.2959 62.5 49.8776 62.5 54.2959C62.5 58.7142 66.0817 62.2959 70.5 62.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>
            </svg>
          </Link>
        </p>

        <div>
          <ul className="hidden justify-between items-center lg:flex">
            <li>
              <Link
                href="/my-acount"
                className="py-4 pl-8 flex justify-between items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                حساب من
              </Link>
            </li>
            <li>
              <Link
                href="/create-advertise"
                className="py-1 px-4 flex justify-between items-center gap-2 hover:bg-gray-200 rounded-full border border-gray-200"
              >
                <span className="bg-lime-400 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
                ثبت آگهی
              </Link>
            </li>
          </ul>

          <Link
            href="/create-advertise"
            className="py-1 px-2 flex justify-between items-center gap-2 hover:bg-gray-200 rounded-full border border-gray-200 lg:hidden text-xs"
          >
            <span className="bg-lime-400 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            ثبت آگهی
          </Link>
        </div>
      </div>

      {/*------------------- mobile menu-------------- */}

      <div className={`absolute inset-0 bg-black/50  z-40 duration-300 ${close===false && ('hidden opacity-0 ')} `} onClick={closeHandler}>
     
        <button onClick={closeHandler}>
          <MdOutlineClose
            className="text-white absolute top-5 left-5"
            size={30}
          />
        </button>
      </div>

      <div className={`bg-white w-[300px] z-50 h-full fixed right-0 top-0 bottom-0 flex flex-col justify-between duration-500 ${close===false && ('translate-x-[300px]')}`}  onClick={(e)=>e.stopPropagation()}>
          <div>
            <div className="grid grid-cols-3 gap-5 px-5 text-gray-400 border-b">
              <div  className={`flex flex-col items-center  ${mobileTab==="car" && ('text-blue-600 border-b border-blue-600')}  py-2`} onClick={()=>setMobileTab('car')}>
                <PiCarDuotone size={40} />
                <span className="text-xs">خودرو</span>
              </div>
              <div   className={`flex flex-col items-center  ${mobileTab==="motor" && ('text-blue-600 border-b border-blue-600')}  py-2`} onClick={()=>setMobileTab('motor')}>
                <FaMotorcycle size={40} />
                <span className="text-xs">موتور سیکلت</span>
              </div>
              <div className={`flex flex-col items-center  ${mobileTab==="truck" && ('text-blue-600 border-b border-blue-600')}  py-2`} onClick={()=>setMobileTab('truck')}>
                <FaTruck size={40} />
                <spann className="text-xs">سنگین</spann>
              </div>
            </div>
            <div>
             {mobileTab==='car' && (<CarTab />)}
             {mobileTab==='motor' && (<MotorTab />)}
             {mobileTab==='truck' && (<TruckTab />)}
            </div>
          </div>

          <div className="w-full bg-gray-100 flex justify-between items-center py-4 px-5 font-semibold">
            <div className=" flex items-center justify-start gap-5">
              <span className="p-2 bg-white rounded-full">
                <GoSignIn size={25} />
              </span>
              <span>ورود به حساب من</span>
            </div>
            <IoIosArrowBack size={20} />
          </div>
        </div>



    </div>

  );
};

export default Navbar;
