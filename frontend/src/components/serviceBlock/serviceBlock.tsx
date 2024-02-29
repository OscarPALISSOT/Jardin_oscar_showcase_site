import Service from "@/components/serviceBlock/service";
import Image from "next/image";

interface ServiceBlockProps {
    serviceBlock: Service_blockType;
}

const ServiceBlock = ({serviceBlock}: ServiceBlockProps) => {
    return (
        <div className={'mt-10'}>
            <div className={'flex flex-col sm:flex-row sm:items-start gap-10 mb-8'}>
                {serviceBlock.services.map((service, index) => {
                    return (
                        <Service
                            key={index}
                            service={service}
                        />
                    )
                })}
            </div>

            <div className={'mt-8 mb-6 w-full flex flex-col sm:flex-row gap-4'}>
                <h1 className={'text-2xl lg:text-3xl font-serif font-extrabold text-fontColor mb-2 sm:w-1/2'}>{serviceBlock.catchPhrase}</h1>
                <p className={'text-lg lg:text-xl text-fontColor sm:w-1/2'}>{serviceBlock.text}</p>
            </div>
            <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + serviceBlock.thumbnail + '?key=1080p'}
                   width={1920} height={1080} alt={'thumbnail'}
                   className={'rounded-xl shadow-md w-full h-auto max-h-[60vh] object-cover mb-6'}/>
        </div>
    )
}

export default ServiceBlock