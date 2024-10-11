import useScroll from "@/hooks/useScrool";
import navTo from "@/modules/navTo";

interface ScrollDownCTAProps {
    ctaScroll: string;
    nextSection: string;
}

const ScrollDownCTA = ({ctaScroll, nextSection}: ScrollDownCTAProps) => {

    const scrollY = useScroll();
    const delays = [0, -0.2, -0.4];

    return (
        <>
            <div
                onClick={(e) => {
                    navTo(e, nextSection)
                }}
                className={`hidden hover:cursor-pointer lg:flex justify-center items-center flex-col absolute bottom-0 left-0 right-0 md:-mx-24 2xl:-mx-64 -mx-8 opacity-0 transition duration-300 ${scrollY < 5 && 'opacity-100'}`}
            >
                <p className={' mb-8 text-lg lg:text-xl xl:text-2xl text-fontColor'}>{ctaScroll}</p>
                <div className={'mb-16'}>
                    {delays.map((delay, index) => (
                        <span
                            key={index}
                            className="block z-20 w-5 h-5 border-b-2 border-r-2 border-black transform rotate-45 -m-2 animate-scrollDownAnim"
                            style={{animationDelay: `${delay}s`}}
                        ></span>
                    ))}
                </div>
                <div className={'translate-y-1/2 z-0 absolute rounded-full w-80 h-80 bg-radial-gradient from-neutral-600 to-65%'}/>
            </div>

        </>

    )
}

export default ScrollDownCTA