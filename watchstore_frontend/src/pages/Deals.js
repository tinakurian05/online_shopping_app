import React from 'react';
import ProductCard from '../components/ProductCard';
import './BackgroundWrapper.css';

const Deals = () => {
  const deals = [
    {
      id: 101,
      name: 'Titan Edge Ceramic',
      brand: 'Titan',
      price: 8995,
      originalPrice: 11995,
      image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw254e6bd7/images/Titan/Catalog/1696QC03_1.jpg',
    },
    {
      id: 102,
      name: 'Titan Raga Viva Women’s Watch',
      brand: 'Titan',
      price: 4995,
      originalPrice: 6995,
      image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dwa0dc3406/images/Titan/Catalog/2642QM01_1.jpg',
    },
    {
      id: 103,
      name: 'Titan Octane Chronograph',
      brand: 'Titan',
      price: 7495,
      originalPrice: 9495,
      image: 'https://rukminim2.flixcart.com/image/750/900/xif0q/watch/h/3/j/-original-imahc6exgvbkebd9.jpeg?q=90&crop=false',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>🔥 Best Deals on Titan Watches</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {deals.map((watch) => (
          <div key={watch.id} style={{ position: 'relative' }}>
            <ProductCard watch={watch} />
            <div style={{
              position: 'absolute',
              top: 10,
              left: 10,
              backgroundColor: 'red',
              color: 'white',
              padding: '2px 8px',
              fontSize: '14px',
              borderRadius: '5px'
            }}>
              {Math.round(((watch.originalPrice - watch.price) / watch.originalPrice) * 100)}% OFF
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;

