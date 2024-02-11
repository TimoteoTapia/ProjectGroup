/* Buttons for Products */

import { deleteProduct } from '@/app/lib/data';
import Link from 'next/link';

export function DetailsProductsButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/profile/products/${id}`}
      className="rounded-md border border-gray-400 px-4 py-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:bg-gray-300"
    >
      View Product
    </Link>
  );
}

export function CreateProductButton() {
  return (
    <Link
      href="/dashboard/profile/products/create"
      className="inline-block rounded bg-green-500 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-green-600"
    >
      <span className="hidden md:block">Create Product</span>{' '}
    </Link>
  );
}
export function UpdateProductButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/profile/products/${id}/edit`}
      className="rounded-md border border-gray-400 px-4 py-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:bg-gray-300"
    >
      Update Product
    </Link>
  );
}

export function DeleteProductButton({ id }: { id: string }) {
  const deleteItem = deleteProduct.bind(null, id);
  return (
    <>
      <form action={deleteItem}>
        <button className="rounded-md border border-gray-400 px-4 py-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:bg-gray-300">
          <span className="sr-only">Delete Product</span>
          Delete Product
        </button>
      </form>
    </>
  );
}
