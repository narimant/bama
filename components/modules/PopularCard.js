import Image from "next/image";


const PopularCard = ({imagesrc,alt}) => {
    return (
        <div>
            <Image src={imagesrc} alt={alt}/>
        </div>
    );
};

export default PopularCard;