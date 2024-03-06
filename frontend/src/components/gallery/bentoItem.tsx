import Image from "next/image";

interface BentoItemProps {
    imageSrc: string;
}

const BentoItem = ({imageSrc}: BentoItemProps) => {
    return (
        <div className="cursor-pointer group relative flex flex-col overflow-hidden rounded-xl shadow-md px-4 pb-4 pt-40 flex-grow">
            <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + imageSrc + '?key=squared-thumb'}
                   width={1080} height={1080} alt={'photo réalisation'}
                   className={'absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'}/>
        </div>
    )
}

export default BentoItem