"use client";

import { useState, useEffect } from "react";
import { fetchProducts } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string | null;
  description: string | null;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterName, setFilterName] = useState<string>("");

  useEffect(() => {
    const obtainProducts = async () => {
      try {
        const productsData: Product[] = await fetchProducts();
        setProducts(productsData);
      } catch (error: any) {
        console.error("Error to fetch the products", error.message);
      }
    };

    obtainProducts();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const productFilter = products.filter((product) =>
    product.name.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-Kilamanjaro-950">Products</h1>
        {/* <p>Products page content</p> */}
      </div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filterName}
        onChange={handleFilterChange}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {productFilter.map((product) => {
          return (
            <div key={product.id} className='border-4 p-2 m-2'>
                <h2 className="font-bold">{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button>View Details</button>
                <Image
                  src={product.image || 'https://via.placeholder.com/200'}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              <Link href={`/products/${product.id}`}>
                <button style={{ marginTop: '1rem', backgroundColor: '#dda15e', color: 'black', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', border: 'none', fontSize: '1rem' }}>View Item</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
