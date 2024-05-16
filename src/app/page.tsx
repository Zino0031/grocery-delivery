import React from 'react';
import Banner from '@/components/Banner';
import ProductCarousel from '@/components/ProductCarousel';

const Page: React.FC = async () => {
  let productsDetails: any[] = [];

  try {
    const response = await fetch('https://simple-grocery-store-api.glitch.me/products');
    const products = await response.json();

    const productDetailsPromises = products.map(async (product: any) => {
      const resp = await fetch(`https://simple-grocery-store-api.glitch.me/products/${product.id}`);
      const productDetails = await resp.json();
      return productDetails;
    });

    productsDetails = await Promise.all(productDetailsPromises);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="">
      <Banner />
      <div className="md:py-40 mt-10 mx-10 md:mx-20">
        <ProductCarousel productsDetails={productsDetails} title='Products' />
      </div>
    </div>
  );
};

export default Page;
