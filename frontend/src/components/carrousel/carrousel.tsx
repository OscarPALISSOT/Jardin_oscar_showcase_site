import React, {useCallback, useEffect, useState} from "react";
import CarrouselItem from "@/components/carrousel/carrouselItem";
import CarrouselBtn from "@/components/carrousel/carrouselBtn";
import CarrouselPagination from "@/components/carrousel/carrouselPagination";

type CarrouselProps = {
    images: DirectusFile[];
}

const Carrousel = ({images}: CarrouselProps) => {

    const [currentItem, setCurrentItem] = useState(0);
    const [startTouchX, setStartTouchX] = useState(0);
    const [isTouching, setIsTouching] = useState(false);

    const goToItem = useCallback((index: number) => {
        if (index < 0) {
            currentItem == 0 ? setCurrentItem(images.length - 1) : setCurrentItem(0);
        } else if (index >= images.length - 1 || (images[currentItem + 1] === undefined && index > currentItem)) {
            currentItem == images.length - 1 ? setCurrentItem(0) : setCurrentItem(images.length - 1);
        } else {
            setCurrentItem(index)
        }
    }, [currentItem, images.length, images]);

    useEffect(() => {
        const interval = setInterval(() => {
            !isTouching &&
            goToItem(currentItem + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentItem, isTouching, goToItem]);

    useEffect(() => {
        document.getElementById('carrousel__container')!.style.transform = `translate3d(${currentItem * -100 / images.length}%, 0, 0)`
    }, [currentItem, images.length]);

    useEffect(() => {
        if (isTouching) {
            document.getElementById('carrousel__container')!.style.transition = 'none';
        } else {
            document.getElementById('carrousel__container')!.style.transition = 'transform 500ms ease-in-out';
        }
    }, [isTouching]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsTouching(true);
        setStartTouchX(e.touches[0].clientX);
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentTouchX = e.touches[0].clientX;
        const touchDifference = startTouchX - currentTouchX;
        const swipeThreshold = document.body.clientWidth / 4;

        if (touchDifference > swipeThreshold || touchDifference < -swipeThreshold) {
            return;
        }

        if (currentItem === 0 && touchDifference < 0) {
            return;
        } else if (currentItem === images.length - 1 && touchDifference > 0) {
            return;
        }

        const currentTranslateX = -currentItem * document.getElementById('carrousel__container')!.clientWidth / images.length;

        document.getElementById('carrousel__container')!.style.transform = `translateX(${currentTranslateX - touchDifference}px)`;
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endTouchX = e.changedTouches[0].clientX;
        const touchDifference = startTouchX - endTouchX;
        const swipeThreshold = document.body.clientWidth / 4;

        if (currentItem === 0 && touchDifference < 0) {
            return;
        } else if (currentItem === images.length - 1 && touchDifference > 0) {
            return;
        }

        if (touchDifference > swipeThreshold) {
            setIsTouching(false);
            goToItem(currentItem + 1);
        } else if (touchDifference < -swipeThreshold) {
            setIsTouching(false);
            goToItem(currentItem - 1);
        } else {
            setIsTouching(false);
            document.getElementById('carrousel__container')!.style.transition = 'transform 500ms ease-in-out';
            document.getElementById('carrousel__container')!.style.transform = `translate3d(${currentItem * -100 / images.length}%, 0, 0)`
        }

    }


    return (
        <div
            className={'relative h-full overflow-hidden'}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
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