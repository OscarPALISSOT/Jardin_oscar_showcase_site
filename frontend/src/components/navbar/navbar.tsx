import React from "react";
import useScroll from "@/hooks/useScrool";

interface NavbarProps {
    links: string[];
    logo: string;
}

const Navbar = ({links, logo}: NavbarProps) => {

    const scrollY = useScroll();

    return (
        <>
            <div
                className={`text-2xl transition duration-300 font-bold bg-background font-serif sticky top-0 -mx-24 px-24 mb-6 flex flex-col justify-between ${scrollY > 0 && 'shadow-[0_6px_12px_0_rgba(0,0,0,0.12)] '}`}>
                <div className={'flex flex-row justify-between items-center h-20'}>
                    <h1>Le logo</h1>
                    <div>
                        <ul className={'flex flex-row'}>
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className={'mx-4 cursor-pointer'}>{link}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className={`h-0.5 -mx-8 md:-mx-24 bg-primary origin-right duration-500 scale-x-0 ease-in ${scrollY > 0 && 'scale-x-100'}`}/>
            </div>
        </>
    )
}
export default Navbar