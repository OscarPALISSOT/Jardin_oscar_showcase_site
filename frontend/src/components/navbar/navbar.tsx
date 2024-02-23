import React from "react";

interface NavbarProps {
    links: string[];
    logo: string;
}

const Navbar = ({links, logo}: NavbarProps) => {

    return (
        <>
            <div className={'text-2xl font-bold font-serif -mx-24 px-24 h-20 flex flex-row justify-between items-center mb-6'}>
                <h1>navbar</h1>
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
        </>
    )
}
export default Navbar