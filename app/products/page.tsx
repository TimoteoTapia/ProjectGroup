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
        const productosData: Product[] = await fetchProducts();
        setProducts(productosData);
      } catch (error: any) {
        console.error("Error to fetch the products", error.message);
      }
    };

    obtainProducts();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const productosFiltrados = products.filter((product) =>
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
        {productosFiltrados.map((product) => {
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
