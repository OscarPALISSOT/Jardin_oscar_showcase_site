import Image from "next/image";
import ScrollDownCTA from "@/components/heroBlock/scrollDownCTA";
import Button from "@/components/button";
import useNavTo from "@/modules/navTo";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

interface SectionProps {
    heroBlock: HeroType;
    nextSection: string;
    contactLink: string;
}

const Hero = ({ heroBlock, nextSection, contactLink }: SectionProps) => {

    const navTo = useNavTo();

    return (
        <div className={'relative flex-grow flex-col justify-between'}>
            <div className={'w-full flex flex-col justify-end sm:flex-row sm:items-center'}>
                <div className={'relative w-dvw h-[calc(100dvh-5rem)] -mx-8 md:-mx-24 2xl:-mx-64'}>
                    <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + heroBlock.hero_image + '?key=1080p'} unoptimized
                        width={1080} height={1080} alt={heroBlock.hero_image}
                        className={'h-full w-full object-cover'} />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
                </div>
                <div className={'my-6 absolute'}>
                    <div className={'sm:w-3/5'}>
                        <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-serif font-extrabold text-fontColorLight mb-4 text-shadow-light'}>{heroBlock.title}</h1>
                        <p className={'text-lg lg:text-xl xl:text-2xl text-fontColorLight text-shadow-light'}>{heroBlock.subtitle}</p>
                    </div>
                    <div className={'hidden sm:flex flex-row mt-6 gap-6'}>
                        <Button
                            text={'Voir mes services'}
                            style={'primary'}
                            type={'button'}
                            onClick={(e) => {
                                navTo(e, nextSection)
                            }}
                            icon={faCaretRight}
                        />
                        <Button
                            text={'Demander un devis'}
                            style={'secondary'}
                            type={'button'}
                            onClick={(e) => {
                                navTo(e, contactLink)
                            }}
                            icon={faCaretRight}
                        />
                    </div>
                    <div className={'mt-6 gap-6 sm:hidden'}>
                        <Button
                            text={'Demander un devis'}
                            style={'primary'}
                            type={'button'}
                            onClick={(e) => {
                                navTo(e, contactLink)
                            }}
                            icon={faCaretRight}
                        />
                    </div>

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