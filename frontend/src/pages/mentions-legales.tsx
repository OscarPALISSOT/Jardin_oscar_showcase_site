import NavbarMobile from "@/components/navbar/navbarMobile";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import React from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface MentionsLegalesProps {
    links: string[];
    logo: string;
    heroBlock: HeroType;
    serviceBlock: Service_blockType;
    renovationBlock: RenovationType;
    galleryBlock: GalleryType;
    contactBlock: ContactType;
}

const MentionsLegales = ({links, logo}: MentionsLegalesProps) => {
    return (
        <>
            <div className={'bg-background px-8 md:px-24 2xl:px-64 min-h-[calc(100vh)]'}>
                <NavbarMobile
                    links={links}
                    logo={logo}
                />
                <Navbar
                    links={links}
                    logo={logo}
                />
                <div>
                    <h1>Mentions légales</h1>
                    <p>...</p>
                </div>
                <Footer links={links}/>
            </div>
        </>
    );
}

export async function getServerSideProps() {

    const hero = await client.request(
        readItems('hero', {
            fields: ['*', {}],
        })
    ) as unknown as HeroType;

    const service_block = await client.request(
        readItems('service_block', {
            fields: ['link', {}],
        })
    ) as unknown as Service_blockType;

    const renovation = await client.request(
        readItems('renovation', {
            fields: ['link', {}],
        })
    ) as unknown as RenovationType;

    const gallery = await client.request(
        readItems('gallery', {
            fields: ['link', {}],
        })
    ) as unknown as GalleryType;

    const contact = await client.request(
        readItems('contact', {
            fields: ['link', {}],
        })
    ) as unknown as ContactType;

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

export default MentionsLegales;