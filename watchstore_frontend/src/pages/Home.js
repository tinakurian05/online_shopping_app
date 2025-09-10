import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';
import { fetchWatches } from '../api/watchApi'; // Adjust path if needed

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetchWatches()
    .then((data) => {
      setWatches(data); // or setWatches(data.results) if your API returns { results: [...] }
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching watches:', err);
      setLoading(false);
    });
}, []);

  const filteredWatches = watches.filter((watch) =>
    watch.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Timeless Elegance by Titan</h1>
        <p className="hero-subtitle">Find your perfect timepiece</p>
        <input
          type="text"
          placeholder="Search Titan watches..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="products-section">
        <h2 className="section-title">Featured Watches</h2>
        <div className="product-grid">
          {loading ? (
            <p>Loading watches...</p>
          ) : filteredWatches.length > 0 ? (
            filteredWatches.map((watch) => (
              <ProductCard key={watch.id || watch._id} watch={watch} />
            ))
          ) : (
            <p className="no-results">No watches found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
