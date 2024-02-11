'use client';

import { UpdateProductProfile } from '@/app/lib/actions';
import { EditProductType } from '@/app/lib/definitions';

export default function EditProductComponent({
  productData,
}: {
  productData: EditProductType;
}) {
  const updateProductInfo = UpdateProductProfile.bind(null, productData.id);

  return (
    <>
      <div className="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Product Information
        </h1>
        <form action={updateProductInfo} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={productData.name}
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700">
              Product Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              defaultValue={productData.description}
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-700">
              Product Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              defaultValue={productData.price}
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="stock" className="text-gray-700">
              Product Stock
            </label>
            <input
              type="text"
              name="stock"
              id="stock"
              defaultValue={productData.stock}
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <input
              type="submit"
              value={'Update Product'}
              className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
            />
          </div>
        </form>
      </div>
    </>
  );
}
