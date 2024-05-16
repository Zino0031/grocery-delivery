'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';

interface Product {
    id: string;
    category: string;
    name: string;
    manufacturer: string;
    price: number;
}

interface ProductCarouselProps {
    productsDetails: Product[];
    title: string;
    filter: boolean;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ productsDetails, title, filter }) => {
    const isExtraSmallScreen = useMediaQuery('(max-width: 664px)');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsDetails);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(productsDetails);
        } else {
            setFilteredProducts(productsDetails.filter(product => product.category === selectedCategory.toLowerCase()));
        }
    }, [selectedCategory, productsDetails]);

    const categories = ['All', 'Coffee', 'Fresh-produce', 'Meat-seafood', 'Candy', 'Dairy'];

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-2xl font-bold">{title}</h1>
                {filter && (
                    <div className="flex justify-end">
                        <div>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`mx-2 px-3 py-1 rounded ${
                                        selectedCategory === category ? 'text-green-600 font-bold' : ''
                                    }`}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Swiper
                slidesPerView={isExtraSmallScreen ? 1 : 5}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
                key={filteredProducts.length}
            >
                {filteredProducts.map((productDetails: Product) => (
                    <SwiperSlide key={productDetails.id}>
                        <div className="flex justify-center items-center">
                            <ProductCard Details={productDetails} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
