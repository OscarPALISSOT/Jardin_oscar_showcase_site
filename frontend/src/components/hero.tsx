import Picture from "@/components/picture";

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
                    <Picture
                        image={heroBlock.hero_image}
                        transformationPreset={'squared-thumb'}
                    />
                </div>
            </div>
        </>
    )
}

export default Hero