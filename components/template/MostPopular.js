import Link from "next/link";
import PopularCard from "../modules/PopularCard";
import popular1 from '@/public/images/popular1.jpg'
import popular2 from '@/public/images/popular2.jpg'
import popular3 from '@/public/images/popular3.jpg'
import popular4 from '@/public/images/popular4.jpg'
import popular5 from '@/public/images/popular5.jpg'
import popular6 from '@/public/images/popular6.jpg'
const MostPopular = () => {
  return (
    <div className="container mx-auto w-full mt-24">
      <div className="flex justify-between items-center py-8 ">
        <h1 className="text-xl font-bold">محبوب ترین مدل ها</h1>
        <Link
          href="/car"
          className="flex justify-between items-center text-blue-600 text-sm gap-2"
        >
          <span>تماشای همه</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Link>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
        <PopularCard imagesrc={popular1} alt='bmw'/>
        <PopularCard imagesrc={popular2} alt='pegout'/>
        <PopularCard imagesrc={popular3} alt='toyota'/>
        <PopularCard imagesrc={popular4} alt='benz'/>
        <PopularCard imagesrc={popular5} alt='samand'/>
        <PopularCard imagesrc={popular6} alt='206'/>
      </div>
    </div>
  );
};

export default MostPopular;
