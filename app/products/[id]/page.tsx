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
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
        <h2 className="text-xl font-semibold mb-2">Detalles del producto</h2>
        <p className="text-gray-700 mb-4">{product?.description}</p>
        <p className="text-xl font-semibold mb-4">${product?.price}</p>
        <div className="w-48 h-48 mx-auto">
          <Image
            src={product?.image || 'https://via.placeholder.com/200'}
            alt={'Imagen del producto ' + product?.name}
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
}

