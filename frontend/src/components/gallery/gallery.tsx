import BentoGrid from "@/components/gallery/bentoGrid";
import Carrousel from "@/components/carrousel/carrousel";

interface GalleryProps {
    galleryBlock: GalleryType;
}

const Gallery = ({galleryBlock}: GalleryProps) => {
    return (
        <>
            <div className={'w-full lg:my-4 flex flex-col items-center'}>
                <h1 className={'text-2xl lg:text-3xl xl:text-5xl font-serif font-extrabold text-fontColor mb-1.5 md:mb-4'}>{galleryBlock.title}</h1>
                <p className={'text-lg lg:text-xl xl:text-2xl text-fontColor'}>{galleryBlock.text}</p>
            </div>
            <span className={'hidden lg:block'}>
                <BentoGrid
                    images={galleryBlock.images}
                />
            </span>
            <div className={'lg:hidden my-3 md:-mx-24 -mx-8 h-[calc(80dvh_-_160px)]'}>
                <Carrousel
                    images={galleryBlock.images}
                />
            </div>
        </>
    )
}

export default Gallery
