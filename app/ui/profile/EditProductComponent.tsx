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
      <div>
        <h1>Product Information</h1>
        <form action={updateProductInfo}>
          <div>
            <label htmlFor="name">Product Name</label>
            <input type="text" name='name' id='name' defaultValue={productData.name}/>
          </div>
          <div>
            <label htmlFor="description">Product Description</label>
            <input type="text" name='description' id='description' defaultValue={productData.description}/>
          </div>
          <div>
            <label htmlFor="price">Product Price</label>
            <input type='text' name='price' id='price' defaultValue={productData.price}/>
          </div>
          <div>
            <label htmlFor="stock">Product Stock</label>
            <input type='text' name='stock' id='stock' defaultValue={productData.stock}/>
          </div>
          <div>
            <input type="submit" value={"Update Product"} className='cursor-pointer '/>
          </div>
        </form>
      </div>
    </>
  );
}
