
import { useState, useEffect } from 'react';
import {productsData} from '/data/products.js';
import { Product } from '../Product';
import { useParams } from "react-router-dom";


export const Products = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [products , setProducts] = useState([]);
    const {idCategory} = useParams();

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (idCategory === undefined) {
      setProducts(productsData);
    } else {
      const filteredProducts = productsData.filter((p) => p.category === idCategory);
      setProducts(filteredProducts);
    }
  }, [idCategory]);


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} image={product.image} price={product.price} name={product.name} />
        ))}
        </div>
              {isVisible && (
            <div className="fixed bottom-10 right-10">
              <button
                onClick={scrollToTop}
                className="bg-black hover:bg-black-400 text-white p-4 rounded-full"
                title="Back to Top"
              >
                ↑
              </button>
            </div>
          )}
      </div>
    </div>
  )
}

