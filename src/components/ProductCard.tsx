import React from 'react';
import { useCart } from '@/utils/CartContext'; 

interface Product {
    id: string;
    category: string;
    name: string;
    manufacturer: string;
    price: number;
}

interface ProductCardProps {
    Details: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ Details }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(Details);
    };

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            <a href="#" className='flex justify-center items-center'>
                <img className="p-8 rounded-t-lg w-60 flex justify-center items-center" src="/logo.png" alt="product image" />
            </a>
            <div className="px-5 pb-5 flex-grow h-42">
                <p className="text-gray-700 text-base mb-2">{Details.category}</p>
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">{Details.name}</h5>
                </a>
                <p className="text-gray-700 text-base mb-4">Manufacturer: {Details.manufacturer}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {[...Array(4)].map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        ))}
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">${Details.price}</span>
                    <button onClick={handleAddToCart} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
