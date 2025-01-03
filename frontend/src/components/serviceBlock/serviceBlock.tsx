import Service from "@/components/serviceBlock/service";

interface ServiceBlockProps {
    serviceBlock: Service_blockType;
}

const ServiceBlock = ({serviceBlock}: ServiceBlockProps) => {
    return (
        <div className={'mt-10'}>
            <div className={'flex flex-col lg:flex-row sm:items-start gap-10 mb-8'}>
                {serviceBlock.services.map((service, index) => {
                    return (
                        <Service
                            key={index}
                            service={service}
                        />
                    )
                })}
            </div>

            <div
                className={'my-12 md:-mx-24 2xl:-mx-64 -mx-8 h-fit md:h-60 flex flex-col justify-center bg-center bg-no-repeat bg-cover'}
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_ASSETS_URL + serviceBlock.banner + '?key=1080p'})` }}
            >

                <div className={'md:mx-24 mx-8 my-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]'}>
                    <h1 className={'text-2xl lg:text-3xl font-serif font-extrabold text-fontColorLight mb-2'}>{serviceBlock.banner_title}</h1>
                    <p className={'text-lg lg:text-xl text-fontColorLight'}>{serviceBlock.banner_text}</p>
                </div>
            </div>

            <div className={'mt-8 mb-12 w-full flex flex-col sm:flex-row gap-6'}>
                <h1 className={'text-2xl lg:text-3xl font-serif font-extrabold text-fontColor mb-2 sm:w-1/2'}>{serviceBlock.catchPhrase}</h1>
                <p className={'text-lg lg:text-xl text-fontColor sm:w-1/2'}>{serviceBlock.text}</p>
            </div>
        </div>
    )
}

export default ServiceBlock