import useScroll from "@/hooks/useScrool";
import useMousePosition from "@/hooks/useMousePosition";
import {useEffect, useState} from "react";
import useNavTo from "@/modules/navTo";

interface ScrollDownCTAProps {
    ctaScroll: string;
    nextSection: string;
}

const ScrollDownCTA = ({ctaScroll, nextSection}: ScrollDownCTAProps) => {

    const navTo = useNavTo();
    const delays = [0, -0.2, -0.4];
    return (
        <>
            <div
                onClick={(e) => {
                    navTo(e, nextSection)
                }}
                className={'hidden hover:cursor-pointer lg:flex justify-center items-center flex-col absolute bottom-0 left-0 right-0 md:-mx-24 2xl:-mx-64 -mx-8 transition duration-300'}
            >
                <p className={' mb-8 text-lg lg:text-xl xl:text-2xl text-fontColorLight'}>{ctaScroll}</p>
                <div className={'mb-16'}>
                    {delays.map((delay, index) => (
                        <span
                            key={index}
                            className="block z-20 w-5 h-5 border-b-2 border-r-2 border-fontColorLight transform rotate-45 -m-2 animate-scrollDownAnim"
                            style={{animationDelay: `${delay}s`}}
                        ></span>
                    ))}
                </div>
            </div>
        </>

    )
}

export default ScrollDownCTA