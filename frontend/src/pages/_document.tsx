import React from "react";
import {Html, Head, Main, NextScript} from 'next/document'

export default function RootLayout() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
