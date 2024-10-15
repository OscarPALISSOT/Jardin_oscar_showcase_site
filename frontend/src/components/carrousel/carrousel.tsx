import useWidth from "@/hooks/useWidth";
import {useEffect, useState} from "react";
import CarrouselItem from "@/components/carrousel/carrouselItem";
import CarrouselBtn from "@/components/carrousel/carrouselBtn";
import CarrouselPagination from "@/components/carrousel/carrouselPagination";

type CarrouselProps = {
    images: DirectusFile[];
}

const Carrousel = ({images}: CarrouselProps) => {

    const [currentItem, setCurrentItem] = useState(0);

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
        <div className={'relative h-full overflow-hidden'}>
            <div
                id={'carrousel__container'}
                className={'flex flex-row items-center h-full transition-transform duration-500 ease-in-out'}
                style={{width: (images.length * 100) + "%"}}
            >
                {images.map((image, index) => (
                    <div
                        style={{width: (100 / images.length) + "%"}}
                        key={image.id}
                        className={'h-full'}
                    >
                        <CarrouselItem
                            image={images[index]}
                        />
                    </div>
                ))}
            </div>
            <CarrouselPagination
                currentItem={currentItem}
                totalItems={images.length}
            />
            <CarrouselBtn direction={"left"} onClick={() => goToItem(currentItem - 1)}/>
            <CarrouselBtn direction={"right"} onClick={() => goToItem(currentItem + 1)}/>
        </div>
    );
}

export default Carrousel;