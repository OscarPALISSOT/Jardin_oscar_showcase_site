import useWidth from "@/hooks/useWidth";
import {useEffect, useState} from "react";
import CarrouselItem from "@/components/carrousel/carrouselItem";

type CarrouselProps = {
    images: DirectusFile[];
}

const Carrousel = ({images}: CarrouselProps) => {

    const [currentItem, setCurrentItem] = useState(0)
    const width = useWidth()

    const goToItem = (index: number) => {
        if (index < 0) {
            currentItem == 0 ? setCurrentItem(images.length - 1) : setCurrentItem(0);
        } else if (index >= images.length - 1 || (images[currentItem + 1] === undefined && index > currentItem)) {
            currentItem == images.length - 1 ? setCurrentItem(0) : setCurrentItem(images.length - 1);
        } else {
            setCurrentItem(index)
        }
    }

    useEffect(() => {
        document.getElementById('carrousel__container')!.style.transform = `translate3d(${currentItem * -100 / images.length}%, 0, 0)`
    }, [currentItem]);

    return (
        <div className={'relative'}>
            <div className={'w-full overflow-hidden rounded-xl'}>
                <div id={'carrousel__container'} className={'flex flex-row items-center transition duration-500 h-[calc(100dvh_-_160px)]'}
                     style={{width: (images.length * 100) + "%"}}>
                    {images.map((image) => (
                        <div
                            style={{width: (100 / images.length) + "%"}}
                            key={image.id}
                        >
                            <CarrouselItem
                                image={images[4]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carrousel;