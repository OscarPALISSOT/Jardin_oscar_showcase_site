type CarrouselPaginationProps = {
    currentItem: number;
    totalItems: number;
}

const CarrouselPagination = ({currentItem, totalItems}: CarrouselPaginationProps) => {
    return (
        <div className={'absolute w-full bottom-0 h-16 flex items-start justify-center'}>
            {[...Array(totalItems)].map((_, index) => (
                <div key={index} className={`h-3 rounded-full mx-1 bg-primary duration-300 ease-in-out ${currentItem === index ? 'w-6' : 'w-3'}`}/>
            ))}
        </div>
    )
}

export default CarrouselPagination;