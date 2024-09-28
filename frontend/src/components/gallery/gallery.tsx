import BentoGrid from "@/components/gallery/bentoGrid";
import Carrousel from "@/components/carrousel/carrousel";

interface GalleryProps {
    galleryBlock: GalleryType;
}

const Gallery = ({galleryBlock}: GalleryProps) => {
    return (
        <>
            <div className={'w-full mb-4 md:my-4 flex flex-col items-center'}>
                <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-serif font-extrabold text-fontColor mb-1.5 md:mb-4'}>{galleryBlock.title}</h1>
                <p className={'text-lg lg:text-xl xl:text-2xl text-fontColor'}>{galleryBlock.text}</p>
            </div>
            <span className={'hidden lg:block'}>
                <BentoGrid
                    images={galleryBlock.images}
                />
            </span>
            <span className={'lg:hidden'}>
                <Carrousel
                    images={galleryBlock.images}
                />
            </span>
        </>
    )
}

export default Gallery
