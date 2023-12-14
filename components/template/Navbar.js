import Link from "next/link";
import { FaCarRear } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { GrLineChart } from "react-icons/gr";
import { PiEngine } from "react-icons/pi";
import { BsNewspaper } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="w-full  bg-[#FBFBFB]  shadow-md text-center font-Vazirmatn text-base font-medium">
      <div className="container mx-auto flex justify-between  items-center">
        <div>
          <ul className="flex justify-between items-center" >
            <li  className="group ">
              <Link href="/car" className="flex pl-8 py-5 ">
                خودرو
              </Link>

              {/* ----child menu---- */}
              <div className="absolute hidden flex-col z-20 bg-white  w-60 items-center group-hover:flex">
                <div className="flex flex-col p-2 w-full bg-gray-200">

                  <Link
                    href=""
                    className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full"
                  >
                    <FaCarRear className="w-6 h-6" />
                    <span>خرید خودرو</span>
                  </Link>

                  <Link href="" className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full">
                  <IoMdAdd  className="w-6 h-6"/>
                    <span>ثبت آگهی خودرو</span>
                  </Link>

                  <Link href="" className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full">
                    <GrLineChart  className="w-6 h-6"/>
                    <span>قیمت روز خودرو</span>
                  </Link>
                  <Link href="" className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full">
                    <PiEngine  className="w-6 h-6"/>
                    <span> مشخصات فنی خودرو </span>
                  </Link>


                  <Link href="" className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full">
                    <BsNewspaper  className="w-6 h-6"/>
                    <span>اخبار خودرو</span>
                  </Link>
                </div>

                <div className="bg-gray-200 mt-1 w-full font-light text-sm">
                  <Link href="" className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full">
                    <span>استغلام خلافی خودرو</span>
                    <span className="bg-red-600 text-white text-[10px] px-1 py-0 rounded-md">جدید</span>
                  </Link>
                  <Link href="" className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full">
                    <span>شرایط فروش خودروسازها</span>
                  </Link>
                  <Link href="" className=" flex  py-3 px-4 gap-2 hover:bg-gray-50 w-full">
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

        <p>
          <Link href="/">
            <svg
           
              viewBox="0 0 81 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12"
              data-v-5561ece8=""
            >
              <path
                d="M78.5 26.2959H62.5V42.2959H78.5V26.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>{" "}
              <path
                d="M18.5 2.2959H2.5V42.2959H18.5V2.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>{" "}
              <path
                d="M58.5 2.2959H42.5V42.2959H58.5V2.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>{" "}
              <path
                d="M30.5 42.2959C34.9183 42.2959 38.5 38.7142 38.5 34.2959C38.5 29.8776 34.9183 26.2959 30.5 26.2959C26.0817 26.2959 22.5 29.8776 22.5 34.2959C22.5 38.7142 26.0817 42.2959 30.5 42.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>{" "}
              <path
                d="M70.5 62.2959C74.9183 62.2959 78.5 58.7142 78.5 54.2959C78.5 49.8776 74.9183 46.2959 70.5 46.2959C66.0817 46.2959 62.5 49.8776 62.5 54.2959C62.5 58.7142 66.0817 62.2959 70.5 62.2959Z"
                fill="#1F1F1E"
                data-v-5561ece8=""
              ></path>
            </svg>
          </Link>
        </p>

        <div>
          <ul className="flex justify-between items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
