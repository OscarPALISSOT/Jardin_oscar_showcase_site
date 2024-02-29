import Image from "next/image";

interface SectionProps {
    heroBlock: HeroType;
}
const Hero = ({heroBlock}: SectionProps) => {
    return (
        <>
            <div className={'w-full my-6 flex flex-col sm:flex-row sm:items-center'}>
                <div className={'mb-6 sm:me-4 sm:w-1/2'}>
                    <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-serif font-extrabold text-fontColor mb-4'}>{heroBlock.title}</h1>
                    <p className={'text-lg lg:text-xl xl:text-2xl text-fontColor'}>{heroBlock.subtitle}</p>
                </div>
                <div className={'sm:w-1/2'}>
                    <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.hero_image + '?key=squared-thumb'}
                           width={1080} height={1080} alt={heroBlock.title}
                           className={'rounded-xl shadow-md w-full h-auto hover:scale-[102%] duration-300 ease-out transition-transform z-0'}/>
                </div>
            </div>
        </>
    )
}

export default Hero