import { fetchProductById } from '@/app/lib/data';
import Image from 'next/image';

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(params.id);
  return (
    <>
      <div>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <Image
          src={product?.image || 'https://via.placeholder.com/200'}
          alt={'Product image for' + product?.name}
          width={200}
          height={200}
        />
      </div>
    </>
  );
}
