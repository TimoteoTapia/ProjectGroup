import { fetchProductsByUserId } from '@/app/lib/data';
import Link from 'next/link';
import { DeleteProductButton, DetailsProductsButton, UpdateProductButton } from './Buttons';

export default async function ProductProfileComponent({ id }: { id: string }) {
  const products = await fetchProductsByUserId(id);
  console.log(products);
  return (
    <>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id} className="m-2 border-4 p-2">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.stock}</p>
              <img
                src={product.image || 'https://via.placeholder.com/200'}
                alt={product.name}
                width={200}
                height={200}
              />

              <DetailsProductsButton id={product.id} />
              <UpdateProductButton id={product.id} />
              <DeleteProductButton id={product.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}
