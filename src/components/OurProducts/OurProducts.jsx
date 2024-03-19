import { useEffect, useState } from 'react';
import './OurProducts.scss'

const OurProducts = () => {
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
          const res = await axios.get("http://localhost:3000/products");
          const data = await res?.data.products;
          setProducts(data);
          console.log(products);
        } catch (error) {



            
          setError(error.message);
        }
      };

    useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className='container text-center py-5'>
        <h1 className='mb-3'>
            Our Products
        </h1>
        <ul>
            {

            }
        </ul>
    </div>
  )
}

export default OurProducts