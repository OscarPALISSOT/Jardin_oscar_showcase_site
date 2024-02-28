import React from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import Navbar from "@/components/navbar/navbar";
import useDeviceSize from "@/hooks/useWidth";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Hero from "@/components/hero";
import hero from "@/components/hero";
import Section from "@/components/section";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface HomeProps {
    links: string[];
    logo: string;
    heroBlock: HeroType;
}
const Home = ({logo, links, heroBlock}: HomeProps) => {

    const width = useDeviceSize();

    return (
        <>
            <div className={'bg-background px-8 md:px-24'}>
                {width < 768 ?
                    <NavbarMobile
                        links={links}
                        logo={logo}
                    />
                    :
                    <Navbar
                        links={links}
                        logo={logo}
                    />
                }

                {heroBlock &&
                    <Section id={heroBlock.link}>
                        <Hero heroBlock={heroBlock}/>
                    </Section>
                }

            </div>
        </>
    )
}


export async function getServerSideProps() {

    const hero = await client.request(
        readItems('hero', {
            fields: ['*', {}],
        })
    ) as unknown as HeroType;

    return {
        props: {
            heroBlock: hero,
            links: [hero.link],
            logo: hero.logo,
        },
    };
}

export default Home