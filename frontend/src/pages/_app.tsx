import React from "react";
import type {AppProps} from 'next/app'
import '@/styles/globals.css'
import '@/styles/variable.css'
import Head from "next/head";


export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Le jardin d&apos;Oscar | Terrasses bois et artisan dans le Haut-Doubs</title>
            </Head>

            <Component {...pageProps} />

        </>
    )
}