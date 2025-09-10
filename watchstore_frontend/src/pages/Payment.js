import React from 'react';
import './Payment.css';
import { useCart } from '../context/CartContext';

const Payment = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>

      <div className="payment-content">
        {/* Billing Summary */}
        <div className="summary-section">
          <h3>Order Summary</h3>
          <ul className="summary-list">
            {cart.map((item, index) => (
              <li key={index} className="summary-item">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <hr />
          <div className="summary-total">
            <strong>Total:</strong> <strong>₹{totalPrice}</strong>
          </div>
        </div>

        {/* Payment Method */}
        <div className="payment-section">
          <h3>Select Payment Method</h3>
          <form>
            <label>
              <input type="radio" name="payment" value="card" defaultChecked />
              Credit / Debit Card
            </label>
            <label>
              <input type="radio" name="payment" value="upi" />
              UPI
            </label>
            <label>
              <input type="radio" name="payment" value="cod" />
              Cash on Delivery
            </label>

            <button type="submit" className="pay-button">
              Proceed to Pay ₹{totalPrice}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;

