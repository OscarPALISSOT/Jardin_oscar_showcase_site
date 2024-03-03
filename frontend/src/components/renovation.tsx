import Image from "next/image";
import React from "react";

interface RenovationProps {
    renovationBlock: RenovationType;

}

const Renovation = ({renovationBlock}: RenovationProps) => {
    return (
        <div className={'w-full my-12 flex flex-col sm:flex-row sm:items-center'}>
            <div className={'mb-6 sm:me-4 sm:w-1/2'}>
                <h1 className={'text-3xl lg:text-4xl font-serif font-extrabold text-fontColor mb-2'}>{renovationBlock.title}</h1>
                <p className={'text-lg lg:text-xl text-fontColor'}>{renovationBlock.text}</p>
                <div className={'mt-8 w-full flex sm:flex-row gap-6 flex-col'}>
                    <div className={'flex flex-col gap-2 sm:w-1/2'}>
                        <Image
                            className={'h-10 mb-4 w-fit hover:scale-105 duration-300 ease-out transition-all'}
                            src={process.env.NEXT_PUBLIC_ASSETS_URL + renovationBlock.icon_1 + '?key=logo'} alt={renovationBlock.keyword_1} width={128}
                            height={128}/>
                        <p className={'font-serif font-extrabold text-lg lg:text-xl text-fontColor underline decoration-primary underline-offset-2 decoration-2'}>{renovationBlock.keyword_1}</p>
                        <p className={'text-lg lg:text-xl text-fontColor'}>{renovationBlock.text_1}</p>
                    </div>
                    <div className={'flex flex-col gap-2 sm:w-1/2'}>
                        <Image
                            className={'h-10 mb-4 w-fit hover:scale-105 duration-300 ease-out transition-all'}
                            src={process.env.NEXT_PUBLIC_ASSETS_URL + renovationBlock.icon_2 + '?key=logo'} alt={renovationBlock.keyword_2} width={128}
                            height={128}/>
                        <p className={'font-serif font-extrabold text-lg lg:text-xl text-fontColor underline decoration-primary underline-offset-2 decoration-2'}>{renovationBlock.keyword_2}</p>
                        <p className={'text-lg lg:text-xl text-fontColor'}>{renovationBlock.text_2}</p>
                    </div>
                </div>
            </div>
            <div className={'sm:w-1/2'}>
                <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + renovationBlock.image + '?key=squared-thumb'}
                       width={1080} height={1080} alt={renovationBlock.title}
                       className={'rounded-xl shadow-md w-full h-auto hover:scale-[102%] duration-300 ease-out transition-transform z-0'}/>
            </div>
        </div>
    )
}

export default Renovation