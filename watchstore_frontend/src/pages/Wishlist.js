import React from 'react';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {wishlistItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={item.image} alt={item.name} width="80" />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromWishlist(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearWishlist}>Clear Wishlist</button>
        </>
      )}
    </div>
  );
};

export default Wishlist;
