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
    <form action={setFormState}>
      <div>
        <div>
          <label htmlFor="name">
            Product Name
          </label>
        </div>
        <div>
          <input name='name' id='name' type="text" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="description">
            Product Description
          </label>
        </div>
        <div>
          <input name='description' id='description' type="text" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="price">
            Product Price
          </label>
        </div>
        <div>
          <input name='price' id='price' type="text" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="stock">
            Product Stock
          </label>
        </div>
        <div>
          <input name='stock' id='stock' type="text" />
        </div>
      </div>
      <input type="text" name="userId" id="userId" value={id} hidden/>
      <input type="submit" value={"Create product"}  className='cursor-pointer mt-5'/>
    </form>
  );
}
