'use client'
import React, { createContext, useContext, useState } from 'react';

interface Product {
    id: string;
    category: string;
    name: string;
    manufacturer: string;
    price: number;
}

interface CartContextType {
    totalAmt: number;
    productData: Product[];
    addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [totalAmt, setTotalAmt] = useState(0);
    const [productData, setProductData] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        const updatedProductData = [...productData, product];
        const updatedTotalAmt = updatedProductData.reduce((total, product) => total + product.price, 0);
        setProductData(updatedProductData);
        setTotalAmt(updatedTotalAmt);
    };

    const value: CartContextType = {
        totalAmt,
        productData,
        addToCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
