import Link from 'next/link';
import React from 'react';
import { FaSearch } from "react-icons/fa";
const HomeSearch = () => {
    return (
        <div className='absolute z-20  mx-auto w-1/3 flex justify-center flex-col  mt-5'>
            <div className='w-full relative'>
           <input type='text' className='w-full rounded-3xl leading-10 text-sm px-3 outline-none' placeholder='جست و جو خودرو ...'/>
           <FaSearch  className='absolute left-3 top-3 '/>
           </div>
           <div className='flex gap-2 text-xs  mt-3 justify-center'>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>کار کرده</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>اقساطی</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>صفر</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>اتوکاتیک</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>آفرود</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>هیبرید</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>کلاسیک</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>لوکس</Link>
            <Link href="" className='bg-gray-100 py-1 px-2 rounded-xl text-gray-400'>دوگانه سوز</Link>
       
           </div>
        </div>
    );
};

export default HomeSearch;