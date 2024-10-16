import useScroll from "@/hooks/useScrool";
import navTo from "@/modules/navTo";
import useMousePosition from "@/hooks/useMousePosition";
import {useEffect, useState} from "react";

interface ScrollDownCTAProps {
    ctaScroll: string;
    nextSection: string;
}

const ScrollDownCTA = ({ctaScroll, nextSection}: ScrollDownCTAProps) => {

    const scrollY = useScroll();
    const delays = [0, -0.2, -0.4];
    const xMouse = useMousePosition().x;
    const [isHovered, setIsHovered] = useState(false);
    const [xMove, setXMove] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            isHovered ?
                setXMove((prev) => Math.round(prev + (xMouse - prev) / 15)) :
                setXMove(window.innerWidth / 2);
        }, 6);

        return () => clearInterval(interval);
    }, [xMouse, isHovered]);

    return (
        <>
            <div
                onClick={(e) => {
                    navTo(e, nextSection)
                }}
                className={`hidden hover:cursor-pointer lg:flex justify-center items-center flex-col absolute bottom-0 left-0 right-0 md:-mx-24 2xl:-mx-64 -mx-8 opacity-0 transition duration-300 ${scrollY < 5 && 'opacity-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                <div
                    className={'z-0 absolute rounded-full w-80 h-80 bg-radial-gradient from-neutral-600 to-65% translate-y-1/2 -translate-x-1/2'}
                    style={isHovered ? {left: xMove} : {left: '50%', transition: 'left 200ms ease-in'}}
                />
            </div>

        </>

    )
}

export default ScrollDownCTA