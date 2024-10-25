type CarrouselBtnProps = {
    direction: "left" | "right";
    onClick: () => void;
}

const CarrouselBtn = ({ direction, onClick }: CarrouselBtnProps) => {
    return (
        <>
            <div
                className={`absolute h-full top-0 ${direction === 'left' ? 'left-0 shadow-[20px_0px_27px_28px_rgba(0,_0,_0,_0.3)] md:shadow-[40px_0px_27px_40px_rgba(0,_0,_0,_0.3)]' : 'right-0 shadow-[-20px_0px_27px_28px_rgba(0,_0,_0,_0.3)] md:shadow-[-40px_0px_27px_40px_rgba(0,_0,_0,_0.3)]'}`}/>

            <div
                className={`absolute w-14 md:w-20 h-full top-0 flex flex-row justify-center items-center cursor-pointer transition duration-300 ${direction === 'left' ? 'left-0' : 'right-0'}`}
                onClick={onClick}
            >
                <div className={''}>
                    <div className={'rounded-full w-10 h-10 md:w-14 md:h-14 bg-primary flex items-center justify-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" className="size-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={`${direction === 'left' ? 'M15.75 19.5 8.25 12l7.5-7.5' : 'm8.25 4.5 7.5 7.5-7.5 7.5'}`}
                            />
                        </svg>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CarrouselBtn;