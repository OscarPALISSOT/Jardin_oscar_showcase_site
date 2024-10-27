import {useEffect, useState} from "react";
import Image from "next/image";

interface ImageModalProps {
    imageSrc: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const ImageModal = ({imageSrc, isOpen, setIsOpen}: ImageModalProps) => {


    const [isImageVisible, setIsImageVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add('overflow-hidden');
            setTimeout(() => setIsImageVisible(true), 10);
        } else {
            setTimeout(() => {
                document.documentElement.classList.remove('overflow-hidden');
            }, 300);
        }
        return () => {
            document.documentElement.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed w-screen h-full z-50 top-0 left-0 g-gray-600 rounded-md bg-clip-padding backdrop-filter cursor-pointer transition-all duration-50 ease-in-out ${isImageVisible ? 'bg-opacity-20 backdrop-blur-xl' : 'bg-opacity-0 backdrop-blur-0'}`}
            onClick={() => {
                setIsImageVisible(false);
                setTimeout(() =>setIsOpen(false), 300)
            }}
        >
            <span className={`absolute right-0 mr-12 mt-8 transition-all duration-150 ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 scale-100 hover:scale-110 transition-all duration-300 ease-in-out">
                  <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"/>
                </svg>
            </span>
            <Image
                src={process.env.NEXT_PUBLIC_ASSETS_URL + imageSrc + '?key=squared-thumb'}
                width={1080} height={1080} alt={'photo réalisation'}
                className={`fixed z-50 w-1/2 h-auto max-h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl transition-all duration-300 ease-in-out ${
                    isImageVisible ? 'opacity-100' : 'opacity-0 translate-y-[-40%]'
                }`}
            />
        </div>
    )
};

export default ImageModal;