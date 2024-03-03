import React from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import Navbar from "@/components/navbar/navbar";
import useDeviceSize from "@/hooks/useWidth";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Hero from "@/components/hero";
import Section from "@/components/section";
import ServiceBlock from "@/components/serviceBlock/serviceBlock";
import Renovation from "@/components/renovation";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface HomeProps {
    links: string[];
    logo: string;
    heroBlock: HeroType;
    serviceBlock: Service_blockType;
    renovationBlock: RenovationType;
}
const Home = ({logo, links, heroBlock, serviceBlock, renovationBlock}: HomeProps) => {

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

                {serviceBlock &&
                    <Section id={serviceBlock.link}>
                        <ServiceBlock serviceBlock={serviceBlock}/>
                    </Section>
                }

                {renovationBlock &&
                    <Section id={renovationBlock.link}>
                        <Renovation renovationBlock={renovationBlock}/>
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

    const service_block = await client.request(
        readItems('service_block', {
            fields: ['*', {
                services: ['*', {}]
            }],
        })
    ) as unknown as Service_blockType;

    const renovation = await client.request(
        readItems('renovation', {
            fields: ['*', {}],
        })
    ) as unknown as RenovationType;

    return {
        props: {
            heroBlock: hero,
            serviceBlock: service_block,
            renovationBlock: renovation,
            links: [hero.link, service_block.link, renovation.link],
            logo: hero.logo,
        },
    };
}

export default Home