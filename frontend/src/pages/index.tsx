import React from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Hero from "@/components/heroBlock/hero";
import Section from "@/components/section";
import ServiceBlock from "@/components/serviceBlock/serviceBlock";
import Renovation from "@/components/renovation";
import Gallery from "@/components/gallery/gallery";
import ContactBlock from "@/components/contact/contactBlock";
import Footer from "@/components/footer";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface HomeProps {
    links: string[];
    logo: string;
    heroBlock: HeroType;
    serviceBlock: Service_blockType;
    renovationBlock: RenovationType;
    galleryBlock: GalleryType;
    contactBlock: ContactType;
}
const Home = ({logo, links, heroBlock, serviceBlock, renovationBlock, galleryBlock, contactBlock}: HomeProps) => {

    return (
        <>
            <div className={'bg-background px-8 md:px-24 2xl:px-64'}>
                <NavbarMobile
                    links={links}
                    logo={logo}
                />
                <Navbar
                    links={links}
                    logo={logo}
                />
                {heroBlock &&
                    <Section id={heroBlock.link}>
                        <Hero
                            heroBlock={heroBlock}
                            nextSection={links[1]}
                            contactLink={links[4]}
                        />
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

                {galleryBlock &&
                    <Section id={galleryBlock.link}>
                        <Gallery galleryBlock={galleryBlock}/>
                    </Section>
                }

                {contactBlock &&
                    <Section id={contactBlock.link}>
                        <ContactBlock contactBlock={contactBlock}/>
                    </Section>
                }
                <Footer links={links}/>
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

    const gallery = await client.request(
        readItems('gallery', {
            fields: ['*', {
                images: ['*', {}]
            }],
        })
    ) as unknown as GalleryType;

    const contact = await client.request(
        readItems('contact', {
            fields: ['*', {}],
        })
    ) as unknown as ContactType;

    contact.email = btoa(contact.email);

    return {
        props: {
            heroBlock: hero,
            serviceBlock: service_block,
            renovationBlock: renovation,
            galleryBlock: gallery,
            contactBlock: contact,
            links: [hero.link, service_block.link, renovation.link, gallery.link, contact.link],
            logo: hero.logo,
        },
    };
}

export default Home