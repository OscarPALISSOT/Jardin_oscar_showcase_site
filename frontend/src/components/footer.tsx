import Link from "next/link";
import navTo from "@/modules/navTo";
import useScroll from "@/hooks/useScrool";
import {useEffect, useState} from "react";

interface FooterProps {
    links: string[];
}

const Footer = ({links}: FooterProps) => {

    const scrollY = useScroll();
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        if (scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    }, [scrollY]);

    return (
        <footer className={`h-auto xl:h-32 py-6 xl:w-full 2xl:-mx-64 md:-mx-24 -mx-8 2xl:px-64 md:px-24 px-8 mt-4 xl:fixed xl:scale-y-0 origin-bottom bottom-0 flex flex-row justify-between xl:items-center lg:snap-start shadow-[0_-6px_12px_0_rgba(0,0,0,0.12)] border-t-2 border-primary duration-150 transition-all ${isBottom && 'xl:scale-y-100'}`}>
            <li className={'flex flex-col xl:flex-row gap-3 lg:gap-6'}>
                {links.map((link, index) => {
                    return (
                        <FooterLink key={index} link={link}/>
                    )
                })}
            </li>
            <div className={'flex flex-col xl:flex-row gap-3 xl:gap-6 w-1/2 xl:justify-end'}>
                <FooterLink link={'Mentions légales'}/>
                <p className={'text-md lg:text-lg text-fontColor'}>{`© ${currentYear} Le jardin d'Oscar. Tous droits réservés.`}</p>
            </div>

        </footer>
    );
}


interface FooterLinkProps {
    link: string;
}

const FooterLink = ({link}: FooterLinkProps) => {
    return (
        <Link
            className={'cursor-pointer text-md lg:text-lg text-fontColor hover:text-primary transition-all hover:decoration-0 duration-150 ease-in-out underline decoration-2 decoration-primary'}
            href={`/#${link}`}
            onClick={(e) => {
                navTo(e, link)
            }}
        >
            {link}
        </Link>
    );
}

export default Footer;