import { fetchProductById } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProfileProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const product = await fetchProductById(id);
  return (
    <>
      <div className="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          {product?.name}
        </h1>
        <p className="mb-2 text-gray-600">{product?.description}</p>
        <p className="mb-2 text-gray-700">Price: ${product?.price}</p>
        <p className="mb-2 text-gray-700">Stock: {product?.stock}</p>
        <div className="mx-auto h-40 w-40">
          <Image
            src={product?.image || 'https://via.placeholder.com/200'}
            alt={'Image product of ' + product?.name}
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
