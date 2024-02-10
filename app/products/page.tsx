import { fetchProducts } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await fetchProducts();
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-Kilamanjaro-950">Products</h1>
        <p>Products page content</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map((product) => {
          return (
            <div key={product.id} className='border-4 p-2 m-2'>
              <Link href={`/products/${product.id}`}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <Image
                  src={product.image || 'https://via.placeholder.com/200'}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
