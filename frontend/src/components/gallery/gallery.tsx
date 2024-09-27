import BentoGrid from "@/components/gallery/bentoGrid";

interface GalleryProps {
    galleryBlock: GalleryType;
}

const Gallery = ({galleryBlock}: GalleryProps) => {
    return (
        <div className={'my-12'}>
            <div className={'w-full mb-12 flex flex-col items-center'}>
                <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-serif font-extrabold text-fontColor mb-4'}>{galleryBlock.title}</h1>
                <p className={'text-lg lg:text-xl xl:text-2xl text-fontColor'}>{galleryBlock.text}</p>
            </div>
            <BentoGrid
                images={galleryBlock.images}
            />
            {/*<br/>
            <Carrousel
                images={galleryBlock.images}
            />*/}
        </div>
    )
}

export default Gallery
