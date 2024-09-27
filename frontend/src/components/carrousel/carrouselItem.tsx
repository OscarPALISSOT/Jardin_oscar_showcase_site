import Image from "next/image";

type CarrouselItemProps = {
    image: DirectusFile;
}

const CarrouselItem = ({image}: CarrouselItemProps) => {
    return (
        <div className="cursor-pointer h-[80%] group">
            <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + image.directus_files_id + '?key=squared-thumb'}
                   width={1080} height={1080} alt={image.directus_files_id}
                   className={'h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'}/>
        </div>
    )
}

export default CarrouselItem;