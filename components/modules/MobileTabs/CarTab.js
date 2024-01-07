import { FaCarRear } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { GrLineChart } from "react-icons/gr";
import { PiEngine } from "react-icons/pi";
import { BsNewspaper } from "react-icons/bs";

import Link from 'next/link';
import React from 'react';

const CarTab = () => {
    return (
        <div>
          
                <div className="flex flex-col p-2 w-full text-sm ">
                  <Link
                    href="#"
                    className=" flex  py-3 px-4 gap-2  w-full"
                  >
                    <FaCarRear className="w-4 h-4" />
                    <span>خرید خودرو</span>
                  </Link>

                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 w-full"
                  >
                    <IoMdAdd className="w-4 h-4" />
                    <span>ثبت آگهی خودرو</span>
                  </Link>

                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2  w-full"
                  >
                    <GrLineChart className="w-4 h-4" />
                    <span>قیمت روز خودرو</span>
                  </Link>
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2  w-full"
                  >
                    <PiEngine className="w-4 h-4" />
                    <span> مشخصات فنی خودرو </span>
                  </Link>

                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2  w-full"
                  >
                    <BsNewspaper className="w-4 h-4" />
                    <span>اخبار خودرو</span>
                  </Link>
                </div>

                <div className=" mt-1 w-full font-light text-sm">
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2  w-full"
                  >
                    <span>استغلام خلافی خودرو</span>
                    <span className="bg-red-600 text-white text-[10px] px-1 py-0 rounded-md">
                      جدید
                    </span>
                  </Link>
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2  w-full"
                  >
                    <span>شرایط فروش خودروسازها</span>
                  </Link>
                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2  w-full"
                  >
                    <span>ثبت نام نمایشگاه خودرو</span>
                  </Link>
                </div>
      
       
        </div>
    );
};

export default CarTab;