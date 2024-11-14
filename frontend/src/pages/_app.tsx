import React from "react";
import type {AppProps} from 'next/app'
import '@/styles/globals.css'
import '@/styles/variable.css'
import Head from "next/head";
import GoogleCaptchaWrapper from "@/components/googleCaptchaWrapper";


export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Le jardin d&apos;Oscar | Terrasses bois et artisan dans le Doubs</title>
                <meta name="theme-color" content="#dc891c" media="(prefers-color-scheme: light)"/>
                <meta name="theme-color" content="#af6d16" media="(prefers-color-scheme: dark)"/>
            </Head>

            <GoogleCaptchaWrapper>
                <Component {...pageProps} />
            </GoogleCaptchaWrapper>
        </>
    )
}