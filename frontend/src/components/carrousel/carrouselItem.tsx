import Image from "next/image";

type CarrouselItemProps = {
    image: DirectusFile;
}

const CarrouselItem = ({image}: CarrouselItemProps) => {
    return (
        <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + image.directus_files_id + '?key=squared-thumb'}
               width={1080} height={1080} alt={image.directus_files_id}
               className={'h-full w-full object-cover'}/>
    )
}

export default CarrouselItem;