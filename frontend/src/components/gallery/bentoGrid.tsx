import BentoItem from "@/components/gallery/bentoItem";

interface BentoGridProps {
    images: DirectusFile[];
}

const BentoGrid = ({images}: BentoGridProps) => {
    return (
        <div>
            <div className="py-4 mx-auto">
                <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full">
                    <div className="col-span-2 row-span-3 h-full flex flex-col">
                        <BentoItem imageSrc={images[0].directus_files_id}/>
                    </div>
                    <div className="col-span-2 row-span-1 h-full flex flex-col">
                        <BentoItem imageSrc={images[1].directus_files_id}/>
                    </div>
                    <div className="col-span-1 row-span-2 h-full flex flex-col">
                        <BentoItem imageSrc={images[2].directus_files_id}/>
                    </div>
                    <div className="col-span-1 row-span-1 h-full flex flex-col">
                        <BentoItem imageSrc={images[3].directus_files_id}/>
                    </div>
                    <div className="col-span-1 h-full flex flex-col">
                        <BentoItem imageSrc={images[4].directus_files_id}/>
                    </div>
                    <div className="col-span-1 row-span-2 h-full flex flex-col">
                        <BentoItem imageSrc={images[5].directus_files_id}/>
                    </div>
                    <div className="col-span-2 row-span-2 h-full flex flex-col">
                        <BentoItem imageSrc={images[6].directus_files_id}/>
                    </div>
                    <div className="col-span-2 row-span-1 h-full flex flex-col">
                        <BentoItem imageSrc={images[7].directus_files_id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BentoGrid;