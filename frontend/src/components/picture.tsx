import Image from "next/image";

type PictureProps = {
    image: string;
    transformationPreset: 'squared-thumb' | '1080p' | 'logo' | 'motif';
    style?: string;
}

const Picture = ({image, transformationPreset, style}: PictureProps) => {
    return (
        <div className={`group overflow-hidden rounded-xl flex items-center ${style ?? ''}`}>
            <Image src={process.env.NEXT_PUBLIC_ASSETS_URL + image + '?key=' + transformationPreset}
                   width={1080} height={1080} alt={image}
                   className={'h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'}/>
        </div>
    )
}

export default Picture;