/* Buttons for Products */

import { deleteProduct } from '@/app/lib/data';
import Link from 'next/link';

export function DetailsProductsButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/profile/products/${id}`}
      className="hover:bg-silverSand-300 rounded-md border p-2"
    >
      View product
    </Link>
  );
}

export function CreateProductButton() {
  return (
    <Link
      href="/dashboard/profile/products/create" 
    >
      <span className="hidden md:block">Create Product</span>{' '}
    </Link>
  );
}

export function UpdateProductButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/profile/products/${id}/edit`}
      className="hover:bg-silverSand-300 rounded-md border p-2"
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
        <button className="hover:bg-silverSand-300 rounded-md border p-2">
          <span className="sr-only">Delete</span>
          Delete
        </button>
      </form>
    </>
  );
}
