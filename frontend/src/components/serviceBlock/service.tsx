import Image from "next/image";

interface ServiceProps {
    service: ServiceType;
}

const Service = ({service}: ServiceProps) => {
    return (
        <div className={'sm:w-1/3 flex flex-col gap-6'}>
            <div className={'h-20 w-auto'}>
                <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + service.image + '?key=motif'} alt={service.title}
                       width={256} height={256} className={'h-full w-auto hover:scale-105 duration-300 ease-out transition-all'}/>
            </div>
            <h1 className={'text-2xl lg:text-3xl font-serif font-extrabold text-fontColor mb-2'}>{service.title}</h1>
            <p className={'text-lg lg:text-xl text-fontColor'}>{service.text}</p>
        </div>
    )
}

export default Service