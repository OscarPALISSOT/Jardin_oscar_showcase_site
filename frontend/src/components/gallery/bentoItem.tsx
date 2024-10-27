import Image from "next/image";
import {useEffect, useState} from "react";
import ImageModal from "@/components/imageModal";

interface BentoItemProps {
    imageSrc: string;
}

const BentoItem = ({imageSrc}: BentoItemProps) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div
                className={'group relative flex flex-col overflow-hidden rounded-xl px-4 pb-4 pt-40 flex-grow cursor-pointer shadow-md transition-all duration-500 ease-in-out'}
            >
                <Image
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + imageSrc + '?key=squared-thumb'}
                    width={1080} height={1080} alt={'photo réalisation'}
                    className={'absolute left-0 top-0 inset-0 h-full w-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out'}
                    onClick={() => setIsFocused(true)}
                />
            </div>
            {isFocused &&
                <ImageModal
                    imageSrc={imageSrc}
                    isOpen={isFocused}
                    setIsOpen={setIsFocused}
                />
            }
        </>
    )
}

export default BentoItem