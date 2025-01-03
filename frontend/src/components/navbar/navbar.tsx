import React from "react";
import useScroll from "@/hooks/useScrool";
import Link from "next/link";
import Image from "next/image";
import useCurrentSection from "@/hooks/useCurrentSection";
import useNavTo from "@/modules/navTo";

interface NavbarProps {
    links: string[];
    logo: string;
}

const Navbar = ({links, logo}: NavbarProps) => {

    const scrollY = useScroll();
    const currentSection = useCurrentSection(links);
    const navTo = useNavTo();

    return (
        <>
            <div
                className={`hidden lg:flex text-2xl transition duration-300 font-bold bg-background font-serif sticky top-0 2xl:px-64 2xl:-mx-64 -mx-24 px-24 flex-col justify-between z-50 ${scrollY > 2 && 'shadow-[0_6px_12px_0_rgba(0,0,0,0.12)] '}`}>
                <div className={'flex flex-row justify-between items-center h-20'}>
                    <Link href="/">
                        <Image
                            className={'h-12 w-auto cursor-pointer hover:scale-105 duration-300 ease-out transition-all'}
                            src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo" width={128}
                            height={128}/>
                    </Link>
                    <div>
                        <ul className={'flex flex-row'}>
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className={'mx-4 cursor-pointer relative'}>
                                        <Link
                                            href={`/#${link}`}
                                            onClick={(e) => {
                                              navTo(e, link)
                                            }}
                                            className={`before:content-[""] before:absolute before:h-0.5 before:bottom-0.5 before:bg-primary before:transition-transform before:w-full before:left-0 before:ease-out before:duration-300 before:origin-bottom-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-bottom-left ${currentSection === link && 'before:scale-x-100 before:origin-bottom-left'}`}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div
                    className={`h-0.5 -mx-8 md:-mx-24 2xl:-mx-64 bg-primary origin-right duration-500 scale-x-0 ease-in ${scrollY > 2 && 'scale-x-100'}`}/>
            </div>
        </>
    )
}
export default Navbar