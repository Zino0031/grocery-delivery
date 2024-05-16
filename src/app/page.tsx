import React from 'react';
import Banner from '@/components/Banner';
import ProductCarousel from '@/components/ProductCarousel';
import PromoCard from '@/components/PromoCard';
import ServicesCard from '@/components/ServicesCard';

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
      <div className="md:pt-40 mt-10 mx-10 md:mx-20">
        <ProductCarousel productsDetails={productsDetails} title='Products' filter={true} />
      </div>
      <div className="mt-10 mx-10 md:mx-20">
        <ProductCarousel productsDetails={productsDetails.slice(0, 10)} title='10 Top Rated' filter={false} />
      </div>
      <div className="mx-10 flex flex-col md:flex-row mt-5 mb-5 gap-5 items-center justify-center">
      <PromoCard
                promo="Free delivery"
                title="Free delivery over $50 "
                description="Shop $50 product and get free delivery anywhre."
                link="#"
                imageUrl="/promo2.jpg"
                image="/promo2.png"
            />
            <PromoCard
                promo="60% off"
                title="Organic Food"
                description="Save up to 60% off on your first order"
                link="#"
                imageUrl="/promo1.jpg"
                image="/promo1.png"
            />
     
        </div>
        <div className="mt-10 mx-10 md:mx-20">
        <ProductCarousel productsDetails={productsDetails.slice(10, 20)} title='Recently Added' filter={false} />
      </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mx-10 md:mx-40 mt-10 mb-20">
      <ServicesCard
                title="Best Prices & Deals"
                desc="Dont miss our daily amazing deals and prices"
                image="/deal.png"
                />
      <ServicesCard
                title="Refundable "
                desc="If your items have damage we agree to refund it"
                image="/ref.png"
                />
      <ServicesCard
                title="Free delivery"
                desc="Do purchase over $50 and get free delivery anywhere"
                image="/deliv.png"
                />
        </div>
    </div>
  );
};

export default Page;
