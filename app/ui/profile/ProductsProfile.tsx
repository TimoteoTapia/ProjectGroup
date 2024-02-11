import { fetchProductsByUserId } from '@/app/lib/data';
import Link from 'next/link';
import {
  DeleteProductButton,
  DetailsProductsButton,
  UpdateProductButton,
} from './Buttons';

export default async function ProductProfileComponent({ id }: { id: string }) {
  const products = await fetchProductsByUserId(id);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="transform overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg transition duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={product.image || 'https://via.placeholder.com/200'}
              alt={product.name}
              className="h-40 w-full object-cover object-center"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="mb-2 text-sm text-gray-600">
                {product.description}
              </p>
              <p className="text-lg font-bold text-green-600">
                ${product.price}
              </p>
              <p className="text-sm font-semibold text-gray-600">
                Stock: {product.stock}
              </p>
              <div className="mt-4 flex justify-end space-x-2">
                <DetailsProductsButton id={product.id} />
                <UpdateProductButton id={product.id} />
                <DeleteProductButton id={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
