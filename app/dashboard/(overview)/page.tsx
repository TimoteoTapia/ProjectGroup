import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { Button } from '@/app/ui/button';
import { fetchCategories, fetchFilteredInvoices } from '@/app/lib/data';

export default async function Page() {
  const categories = await fetchCategories();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Home Page
      </h1>
      <div className="flex flex-col justify-center justify-items-center gap-4 md:flex-row">
        <div className="flex-auto">
          <img
            src="https://media.istockphoto.com/id/1309646840/photo/handicraft-packaging-from-natural-product.jpg?s=612x612&w=0&k=20&c=lXVQU2xpmr-FrJCM93wQpeGgb-gDFCwSCFiVrOcP6L8="
            alt="Hero"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center justify-items-center gap-4">
          <h2 className="mb-4 text-xl md:text-2xl">
            Crafting Dreams, Connecting Hearts: Welcome to Handcrafted Haven
          </h2>
          <p className="mb-2">
            Embark on a Journey of Handcrafted Splendor, Where Every Creation
            Tells a Tale of Artistry and Passion
          </p>
          <Button className="max-w-max">Join Us</Button>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        {categories.map((category) => {
          return (
            <div
              id={category.id}
              className="flex flex-col justify-center justify-items-center gap-4"
            >
              <div className="flex-auto">
                <img
                  src={`${category.image}`}
                  alt="Hero"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center justify-items-center gap-4">
                <h2 className="mb-4 text-lg md:text-xl">
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </h2>
                <p className="mb-2">{category.description}</p>
                <Button className="max-w-max">See Products</Button>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div> */}
    </main>
  );
}
