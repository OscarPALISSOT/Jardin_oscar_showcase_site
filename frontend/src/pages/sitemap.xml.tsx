import {createDirectus, readSingleton, rest} from "@directus/sdk";
import {GetServerSideProps} from "next";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

const Sitemap: React.FC = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

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

    const links = [hero.link, service_block.link, renovation.link, gallery.link, contact.link]
    const homepage = 'https://jardindoscar.fr/'

    if (res) {
        res.setHeader('Content-Type', 'text/xml')
        res.write(`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${homepage}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
            ${links.map(link => `
                <url>
                    <loc>${homepage}#${link}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                </url>
            `).join('')}
        </urlset>`)
        res.end()
    }
    return {
        props: {

        },
    };
}

export default Sitemap;