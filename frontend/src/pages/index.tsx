import React from "react";
import {createDirectus, rest} from "@directus/sdk";
import Navbar from "@/components/navbar/navbar";

//const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

const Home = () => {

    return (
        <>
            <div className={'bg-background px-8 md:px-24'}>
                <Navbar
                    links={['Home', 'About', 'Contact', 'Services']}
                    logo={'/logo.png'}
                />

                <h1 className={'font-serif'}>home</h1>
                <p>lorem ipsum</p>
            </div>
        </>
    )
}
export default Home