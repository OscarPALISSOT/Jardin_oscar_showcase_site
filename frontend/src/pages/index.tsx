import React from "react";
import {createDirectus, rest} from "@directus/sdk";

//const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

const Home = () => {

    return (
        <>
            <h1 className={'font-serif'}>home</h1>
            <p>lorem ipsum</p>
        </>
    )
}
export default Home