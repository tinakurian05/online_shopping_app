import React from 'react';
import './BackgroundWrapper.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // ✅ added for navigation

const Cart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate(); // ✅ used for navigating to payment page

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item, index) => index !== prevCart.indexOf(itemToRemove))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = (cart || []).reduce((sum, item) => sum + item.price, 0);

  const handleProceedToPayment = () => {
    navigate('/payment'); // ✅ go to payment route
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  gap: '10px',
                  borderBottom: '1px solid #ccc',
                  paddingBottom: '10px'
                }}
              >
                <img src={item.image} alt={item.name} width="80" />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={handleProceedToPayment}>Proceed to Payment</button> {/* ✅ Added */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
