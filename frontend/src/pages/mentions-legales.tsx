import NavbarMobile from "@/components/navbar/navbarMobile";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import React from "react";
import {createDirectus, readSingleton, rest} from "@directus/sdk";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface MentionsLegalesProps {
    links: string[];
    logo: string;
    mentions: string;
}

const MentionsLegales = ({links, logo, mentions}: MentionsLegalesProps) => {
    return (
        <>
            <div className={'bg-background px-8 md:px-24 2xl:px-64 h-fit snap-start'}>
                <NavbarMobile
                    links={links}
                    logo={logo}
                />
                <Navbar
                    links={links}
                    logo={logo}
                />

                <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-serif font-extrabold text-fontColor mb-8 mt-14'}>Mentions légales</h1>
                <div
                    className={'mb-10 xl:mb-44 prose prose-h1:text-xl prose-h1:lg:text-2xl prose-h1:xl:text-4xl prose-h1:font-serif prose-h1:font-extrabold prose-h1:text-fontColor prose-h1:mb-3 prose-h1:mt-10 prose-p:text-lg prose-p:lg:text-xl prose-p:text-fontColor prose-p:my-0 prose-a:cursor-pointer prose-a:text-md lg:text-lg prose-a:text-fontColor hover:prose-a:text-primary prose-a:transition-all hover:prose-a:decoration-0 prose-a:duration-150 prose-a:ease-in-out prose-a:underline prose-a:decoration-2 prose-a:decoration-primary'}
                    dangerouslySetInnerHTML={{ __html: mentions }}
                />
                <Footer links={links}/>
            </div>
        </>
    );
}

export async function getServerSideProps() {

    const hero = await client.request(
        readSingleton('hero', {
            fields: ['*', {}],
        })
    ) as unknown as HeroType;

    const service_block = await client.request(
        readSingleton('service_block', {
            fields: ['link', {}],
        })
    ) as unknown as Service_blockType;

    const renovation = await client.request(
        readSingleton('renovation', {
            fields: ['link', {}],
        })
    ) as unknown as RenovationType;

    const gallery = await client.request(
        readSingleton('gallery', {
            fields: ['link', {}],
        })
    ) as unknown as GalleryType;

    const contact = await client.request(
        readSingleton('contact', {
            fields: ['link', {}],
        })
    ) as unknown as ContactType;

    const mentions = await client.request(
        readSingleton('mentions_legales', {
            fields: ['*', {}],
        })
    ) as unknown as MentionsType;

    return {
        props: {
            links: [hero.link, service_block.link, renovation.link, gallery.link, contact.link],
            logo: hero.logo,
            mentions: mentions.mentions,
        },
    };
}

export default MentionsLegales;