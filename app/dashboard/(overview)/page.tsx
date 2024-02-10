import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';
import { fetchProducts } from '@/app/lib/data';
import Link from 'next/link'; // Import Link from Next.js for navigation

export default async function Page() {
  return (
    <main className="container mx-auto px-4">
      <h1 className={`${lusitana.className} text-3xl md:text-4xl mb-8 text-center`}>
        Handcrafted Haven
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://media.istockphoto.com/id/1309646840/photo/handicraft-packaging-from-natural-product.jpg?s=612x612&w=0&k=20&c=lXVQU2xpmr-FrJCM93wQpeGgb-gDFCwSCFiVrOcP6L8="
            alt="Hero"
            className="rounded-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl mb-4">
            Crafting Dreams, Connecting Hearts
          </h2>
          <p className="mb-4">
            Embark on a Journey of Handcrafted Splendor, Where Every Creation
            Tells a Tale of Artistry and Passion
          </p>
          <Button className="px-6 py-3">
            <Link href="/products">
              Explore Products
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
