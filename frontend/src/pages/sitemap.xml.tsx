import {GetServerSideProps} from "next";

const Sitemap: React.FC = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

    const homepage = 'https://jardindoscar.fr/'

    if (res) {
        res.setHeader('Content-Type', 'text/xml')
        res.write(`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${homepage}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
        </urlset>`)
        res.end()
    }
    return {
        props: {

        },
    };
}

export default Sitemap;