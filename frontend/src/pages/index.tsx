import React from "react";
import {createDirectus, rest} from "@directus/sdk";
import Navbar from "@/components/navbar/navbar";

//const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

const Home = () => {

    return (
        <>
            <Navbar
                links={['home', 'about', 'contact', 'services']}
                logo={'/logo.png'}
            />

            <h1 className={'font-serif'}>home</h1>
            <p>lorem ipsum</p>
        </>
    )
}
export default Home