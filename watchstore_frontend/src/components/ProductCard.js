import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ watch }) => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        width: '250px',
        margin: '10px',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={watch.image}
        alt={watch.name}
        width="100%"
        height="200px"
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3>{watch.name}</h3>
      <p><strong>Price:</strong> ₹{watch.price}</p>
      <button
        onClick={() => addToCart(watch)}
        style={{
          padding: '8px 12px',
          background: '#222',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
