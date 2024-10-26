import Picture from "@/components/picture";
import ScrollDownCTA from "@/components/heroBlock/scrollDownCTA";
import Button from "@/components/button";
import navTo from "@/modules/navTo";

interface SectionProps {
    heroBlock: HeroType;
    nextSection: string;
    contactLink: string;
}

const Hero = ({heroBlock, nextSection, contactLink}: SectionProps) => {
    return (
        <div className={'relative flex-grow flex items-center'}>
            <div className={'w-full lg:mb-32 flex flex-col sm:flex-row sm:items-center'}>
                <div className={'mb-6 sm:me-4 sm:w-1/2'}>
                    <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-serif font-extrabold text-fontColor mb-4'}>{heroBlock.title}</h1>
                    <p className={'text-lg lg:text-xl xl:text-2xl text-fontColor'}>{heroBlock.subtitle}</p>
                    <div className={'hidden lg:flex flex-row mt-6 gap-6'}>
                        <Button
                            text={'Voir mes services'}
                            style={'primary'}
                            type={'button'}
                            onClick={(e) => {
                                navTo(e, nextSection)
                            }}
                        />
                        <Button
                            text={'Me contacter'}
                            style={'secondary'}
                            type={'button'}
                            onClick={(e) => {
                                navTo(e, contactLink)
                            }}
                        />
                    </div>
                </div>
                <div className={'sm:w-1/2'}>
                    <Picture
                        image={heroBlock.hero_image}
                        transformationPreset={'squared-thumb'}
                    />
                </div>
            </div>
            <ScrollDownCTA
                ctaScroll={heroBlock.cta_scroll}
                nextSection={nextSection}
            />
        </div>
    )
}

export default Hero