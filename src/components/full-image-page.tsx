
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {

    const image = await getImage(props.id);
    return (
        <div className="flex h-full w-screen min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="object-contain" alt={image.name} />
            </div>
            <div className="flex w-48 flex-shrink-0 flex-col border-l">
                <div className="font-bold text-xl">{image.name}</div>
            </div>
        </div>
    )
}