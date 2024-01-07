import Image from "next/image";
import background from "@public/images/background.jpg";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { ImFilter } from "react-icons/im";
import HomeSearch from "../modules/HomeSearch";
import { CiSearch } from "react-icons/ci";
import { SiAudi } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { SiVolvo } from "react-icons/si";
import { SiHyundai } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiNissan } from "react-icons/si";

const HomeHeader = () => {
  const [blur, setBlur] = useState(false);
  const [priceRange,setPriceRange]=useState(0);
  const blurActive = (e) => {
    setBlur(() => !blur);
  };

  const changeHandler = (e) => {
    setPriceRange(e.target.value)
  };
  return (
    <>
      <div className=" relative flex justify-center">
        <div className="flex justify-center items-center h-[calc(100svh-128px)] overflow-hidden">
          <Image src={background} alt="Some text" />
        </div>

        {/* -----search section ------    */}

        <HomeSearch />

        <div className="w-3/5 h-28 bg-white text-black z-10  absolute -bottom-10 border-gray-200 border grid grid-cols-3">
          <div className="flex justify-center items-start w-full flex-col pr-6">
            <p
              className="flex justify-between w-60 items-center text-base font-bold cursor-pointer"
              onClick={blurActive}
            >
              <span>برند و مدل</span>
              <IoIosArrowDown />
            </p>
            <p className="text-xs">تمام برندها و مدل ها</p>
          </div>

          <div className="flex justify-center items-center flex-col ">
            <label
              htmlFor="default-range"
              className=" mb-2 text-sm  text-gray-900 dark:text-white flex justify-between w-full "
            >
              <span>قیمت</span>
              <span>0 میلیون تا {priceRange} میلیارد تومان</span>
            </label>
            <input
            onChange={changeHandler}
              id="default-range"
              type="range"
              value={priceRange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-neutral-900"
            />
          </div>

          <div className="flex justify-center items-center">
            <Link
              href=""
              className="bg-lime-400 flex items-center gap-2 py-3 px-6 rounded-3xl font-bold"
            >
              <ImFilter />
              <span> نمایش آگهی ها (2 فیلتر)</span>
            </Link>
          </div>
        </div>
      </div>



      {/* ---modal ------ */}
      <div
        onClick={blurActive}
        className={`${
          !blur && "hidden"
        }  inset-0 fixed z-20  backdrop-blur-md flex justify-center items-center`}
      >
        <div className="bg-white relative w-1/5 h-3/4 shadow-md z-50 border border-spacing-20 flex flex-col justify-between overflow-y-hidden" onClick={(e)=>e.stopPropagation()}>
          <div>
          <div className="flex flex-col p-3 h-auto">
            <h2 className="text-xl font-bold py-2 ">انتخاب برند و مدل</h2>
            <p className="text-base py-2">برند و مدل مورد نظر خود را انتخاب  کنید</p>
          </div>
          <div className='relative py-2 px-3'>
           <input type='text' className='bg-gray-100 w-full leading-10 outline-none text-sm px-2 rounded-3xl' placeholder='جست و جو خودرو ...'/>
           <CiSearch  className='absolute left-5 top-5'/>
           </div>

          <div className="">


            <div className="flex justify-between items-center border-b py-4 px-3">
                <div className="flex items-center gap-3">
                  <SiAudi className="text-xl"/>
                  <span>آئودی</span>
                </div>
                <span>
                  <IoIosArrowBack />
                </span>
            </div>

            <div className="flex justify-between items-center border-b py-4 px-3">
                <div className="flex items-center gap-3">
                  <SiNissan className="text-xl"/>
                  <span>نیسان</span>
                </div>
                <span>
                  <IoIosArrowBack />
                </span>
            </div>

            <div className="flex justify-between items-center border-b py-4 px-3">
                <div className="flex items-center gap-3">
                  <SiVolvo className="text-xl"/>
                  <span>ولوو</span>
                </div>
                <span>
                  <IoIosArrowBack />
                </span>
            </div>


            <div className="flex justify-between items-center border-b py-4 px-3">
                <div className="flex items-center gap-3">
                  <SiHonda className="text-xl"/>
                  <span>هوندا</span>
                </div>
                <span>
                  <IoIosArrowBack />
                </span>
            </div>


            <div className="flex justify-between items-center border-b py-4 px-3">
                <div className="flex items-center gap-3">
                  <SiHyundai className="text-xl"/>
                  <span>هیوندای</span>
                </div>
                <span>
                  <IoIosArrowBack />
                </span>
            </div>



          </div>
          </div>



          <div className="flex justify-between items-center absolute  left-0 right-0 bottom-0 bg-white bg-opacity-75">
            <button  onClick={blurActive} className="w-1/2 border rounded-3xl m-3 py-2 font-bold hover:bg-gray-200">بستن</button>
            <button className=" w-1/2 bg-gray-100 rounded-3xl m-3 py-2 font-bold text-gray-400">انتخاب</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
