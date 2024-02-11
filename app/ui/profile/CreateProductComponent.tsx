'use client';

import { CreateProductProfile } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function CreateProductComponent({ id }: { id: string }) {
  const initialState = { message: '', errors: {} };
  const [formState, setFormState] = useFormState(
    CreateProductProfile,
    initialState,
  );

  return (
    <form
      action={setFormState}
      className="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Product Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Product Description
        </label>
        <input
          name="description"
          id="description"
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Product Price
        </label>
        <input
          name="price"
          id="price"
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="stock"
          className="block text-sm font-medium text-gray-700"
        >
          Product Stock
        </label>
        <input
          name="stock"
          id="stock"
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <input type="text" name="userId" id="userId" value={id} hidden />
      <input
        type="submit"
        value={'Create product'}
        className="mt-5 cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      />
    </form>
  );
}
