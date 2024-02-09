import { fetchProductById } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function ProfileProductDetail({
  params,
}: {
  params: { id: string };
}) {
    const id = params.id;
    const product = await fetchProductById(id);
    return (
        <>
            <div>
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <p>{product?.price}</p>
                <p>{product?.stock}</p>
                <Image
                    src={product?.image || 'https://via.placeholder.com/200'}
                    alt={'Image product of ' + product?.name}
                    width={200}
                    height={200}
                />
            </div>
        </>
    )
}
