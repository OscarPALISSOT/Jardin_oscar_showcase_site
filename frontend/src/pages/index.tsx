import React from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import Navbar from "@/components/navbar/navbar";
import useDeviceSize from "@/hooks/useWidth";
import NavbarMobile from "@/components/navbar/navbarMobile";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

interface HomeProps {
    links: string[];
    logo: string;

}
const Home = ({logo, links}: HomeProps) => {

    const width = useDeviceSize();

    return (
        <>
            <div className={'bg-background px-8 md:px-24'}>
                {width < 768 ?
                    <NavbarMobile
                        links={links}
                        logo={logo}
                    />
                    :
                    <Navbar
                        links={links}
                        logo={logo}
                    />
                }
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Fermentum odio eu feugiat pretium. Dolor magna eget est lorem ipsum dolor
                    sit amet. Lacus laoreet non curabitur gravida. Convallis tellus id interdum velit laoreet. Ac ut
                    consequat semper viverra nam libero justo. Ut enim blandit volutpat maecenas volutpat. Parturient
                    montes nascetur ridiculus mus mauris vitae ultricies leo. Ultrices vitae auctor eu augue ut lectus
                    arcu bibendum. Metus aliquam eleifend mi in nulla posuere sollicitudin. Eget duis at tellus at urna
                    condimentum. Enim sit amet venenatis urna cursus eget nunc scelerisque. Faucibus turpis in eu mi.
                    Amet commodo nulla facilisi nullam vehicula ipsum. In eu mi bibendum neque egestas congue. Massa
                    ultricies mi quis hendrerit dolor magna. Ultrices neque ornare aenean euismod elementum. Faucibus
                    vitae aliquet nec ullamcorper sit. Pharetra vel turpis nunc eget lorem dolor.
                </p>
                <p>
                    Euismod lacinia at quis risus sed. Adipiscing at in tellus integer feugiat scelerisque varius morbi
                    enim. Ut pharetra sit amet aliquam id diam maecenas. Amet massa vitae tortor condimentum lacinia
                    quis vel eros donec. Sit amet facilisis magna etiam tempor orci eu lobortis. Euismod in pellentesque
                    massa placerat duis ultricies. Suspendisse ultrices gravida dictum fusce. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada. Non quam lacus suspendisse faucibus interdum.
                    Pellentesque id nibh tortor id aliquet. Elementum integer enim neque volutpat. Nibh mauris cursus
                    mattis molestie. Cras ornare arcu dui vivamus arcu felis bibendum ut. Tortor at risus viverra
                    adipiscing at in. Nisi vitae suscipit tellus mauris. Lobortis feugiat vivamus at augue eget.

                    In ante metus dictum at tempor commodo. Netus et malesuada fames ac turpis egestas maecenas
                    pharetra. Pharetra et ultrices neque ornare aenean. Egestas erat imperdiet sed euismod. Lectus arcu
                    bibendum at varius. Ultrices in iaculis nunc sed augue. Mauris pellentesque pulvinar pellentesque
                    habitant morbi tristique senectus et netus. Tellus mauris a diam maecenas sed. Arcu non odio euismod
                    lacinia at. Turpis cursus in hac habitasse platea dictumst.

                    In eu mi bibendum neque. Vitae proin sagittis nisl rhoncus mattis rhoncus. Arcu vitae elementum
                    curabitur vitae. Aliquam nulla facilisi cras fermentum. Auctor neque vitae tempus quam pellentesque.
                    Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Vitae tortor condimentum
                    lacinia quis vel eros donec ac odio. Ut consequat semper viverra nam. Cursus risus at ultrices mi.
                    Ac auctor augue mauris augue neque gravida. Eget lorem dolor sed viverra ipsum nunc aliquet.
                    Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Aliquet enim tortor at auctor
                    urna nunc id. Diam vel quam elementum pulvinar etiam. Molestie at elementum eu facilisis. In iaculis
                    nunc sed augue lacus viverra vitae congue. Facilisi nullam vehicula ipsum a. In iaculis nunc sed
                    augue lacus viverra vitae congue eu.

                    Felis eget velit aliquet sagittis id consectetur. Duis ultricies lacus sed turpis tincidunt id
                    aliquet. Id aliquet risus feugiat in. Dictum varius duis at consectetur. Mi in nulla posuere
                    sollicitudin aliquam ultrices. Duis ut diam quam nulla porttitor massa id neque. Phasellus egestas
                    tellus rutrum tellus pellentesque eu. Porttitor rhoncus dolor purus non. Tristique risus nec feugiat
                    in fermentum posuere urna nec tincidunt. Mattis vulputate enim nulla aliquet porttitor. In massa
                    tempor nec feugiat nisl pretium fusce. Netus et malesuada fames ac turpis. Tellus molestie nunc non
                    blandit massa enim nec dui. Eget mauris pharetra et ultrices neque. Enim ut sem viverra aliquet.
                    Odio ut sem nulla pharetra diam sit. Arcu ac tortor dignissim convallis aenean et tortor. Tincidunt
                    ornare massa eget egestas purus viverra. Nunc sed augue lacus viverra vitae congue eu consequat ac.
                    Eget nulla facilisi etiam dignissim diam quis enim lobortis. Eget nulla facilisi etiam dignissim
                    diam quis enim lobortis scelerisque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Fermentum odio eu feugiat pretium. Dolor magna eget est lorem ipsum dolor
                    sit amet. Lacus laoreet non curabitur gravida. Convallis tellus id interdum velit laoreet. Ac ut
                    consequat semper viverra nam libero justo. Ut enim blandit volutpat maecenas volutpat. Parturient
                    montes nascetur ridiculus mus mauris vitae ultricies leo. Ultrices vitae auctor eu augue ut lectus
                    arcu bibendum. Metus aliquam eleifend mi in nulla posuere sollicitudin. Eget duis at tellus at urna
                    condimentum. Enim sit amet venenatis urna cursus eget nunc scelerisque. Faucibus turpis in eu mi.
                    Amet commodo nulla facilisi nullam vehicula ipsum. In eu mi bibendum neque egestas congue. Massa
                    ultricies mi quis hendrerit dolor magna. Ultrices neque ornare aenean euismod elementum. Faucibus
                    vitae aliquet nec ullamcorper sit. Pharetra vel turpis nunc eget lorem dolor.

                    Euismod lacinia at quis risus sed. Adipiscing at in tellus integer feugiat scelerisque varius morbi
                    enim. Ut pharetra sit amet aliquam id diam maecenas. Amet massa vitae tortor condimentum lacinia
                    quis vel eros donec. Sit amet facilisis magna etiam tempor orci eu lobortis. Euismod in pellentesque
                    massa placerat duis ultricies. Suspendisse ultrices gravida dictum fusce. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada. Non quam lacus suspendisse faucibus interdum.
                    Pellentesque id nibh tortor id aliquet. Elementum integer enim neque volutpat. Nibh mauris cursus
                    mattis molestie. Cras ornare arcu dui vivamus arcu felis bibendum ut. Tortor at risus viverra
                    adipiscing at in. Nisi vitae suscipit tellus mauris. Lobortis feugiat vivamus at augue eget.

                    In ante metus dictum at tempor commodo. Netus et malesuada fames ac turpis egestas maecenas
                    pharetra. Pharetra et ultrices neque ornare aenean. Egestas erat imperdiet sed euismod. Lectus arcu
                    bibendum at varius. Ultrices in iaculis nunc sed augue. Mauris pellentesque pulvinar pellentesque
                    habitant morbi tristique senectus et netus. Tellus mauris a diam maecenas sed. Arcu non odio euismod
                    lacinia at. Turpis cursus in hac habitasse platea dictumst.
                </p>
                <p>

                    In eu mi bibendum neque. Vitae proin sagittis nisl rhoncus mattis rhoncus. Arcu vitae elementum
                    curabitur vitae. Aliquam nulla facilisi cras fermentum. Auctor neque vitae tempus quam pellentesque.
                    Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Vitae tortor condimentum
                    lacinia quis vel eros donec ac odio. Ut consequat semper viverra nam. Cursus risus at ultrices mi.
                    Ac auctor augue mauris augue neque gravida. Eget lorem dolor sed viverra ipsum nunc aliquet.
                    Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Aliquet enim tortor at auctor
                    urna nunc id. Diam vel quam elementum pulvinar etiam. Molestie at elementum eu facilisis. In iaculis
                    nunc sed augue lacus viverra vitae congue. Facilisi nullam vehicula ipsum a. In iaculis nunc sed
                    augue lacus viverra vitae congue eu.

                    Felis eget velit aliquet sagittis id consectetur. Duis ultricies lacus sed turpis tincidunt id
                    aliquet. Id aliquet risus feugiat in. Dictum varius duis at consectetur. Mi in nulla posuere
                    sollicitudin aliquam ultrices. Duis ut diam quam nulla porttitor massa id neque. Phasellus egestas
                    tellus rutrum tellus pellentesque eu. Porttitor rhoncus dolor purus non. Tristique risus nec feugiat
                    in fermentum posuere urna nec tincidunt. Mattis vulputate enim nulla aliquet porttitor. In massa
                    tempor nec feugiat nisl pretium fusce. Netus et malesuada fames ac turpis. Tellus molestie nunc non
                    blandit massa enim nec dui. Eget mauris pharetra et ultrices neque. Enim ut sem viverra aliquet.
                    Odio ut sem nulla pharetra diam sit. Arcu ac tortor dignissim convallis aenean et tortor. Tincidunt
                    ornare massa eget egestas purus viverra. Nunc sed augue lacus viverra vitae congue eu consequat ac.
                    Eget nulla facilisi etiam dignissim diam quis enim lobortis. Eget nulla facilisi etiam dignissim
                    diam quis enim lobortis scelerisque.
                </p>
            </div>
        </>
    )
}


export async function getServerSideProps() {

    const hero = await client.request(
        readItems('hero', {
            fields: ['*', {}],
        })
    ) as unknown as HeroType;

    return {
        props: {
            heroBlock: hero,
            links: [hero.link],
            logo: hero.logo,
        },
    };
}

export default Home