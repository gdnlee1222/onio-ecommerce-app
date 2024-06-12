import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/shop-context';
import { FaSearch } from 'react-icons/fa';
import logo from "../assets/onio-logo.png";
import './Navbar.css';

const Navbar = () => {
    // State variables using useState hook
    const [isOpen, setIsOpen] = useState(false); // For toggling mobile menu
    const [searchQuery, setSearchQuery] = useState(''); // For storing search input
    const { updateResults } = useContext(ShopContext); // Consuming context

    // Function to toggle mobile menu
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    // Async function to handle search
    const handleSearch = async () => {
        try {
            // Fetching data from API asynchronously
            const response = await fetch("https://fakestoreapi.com/products/");
            const json = await response.json();
            // Filtering data based on search query
            const filteredData = json.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
            // Updating context with filtered data
            updateResults(filteredData);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-search">
                {/* Input for search query */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                />
                {/* Button to trigger search */}
                <button onClick={handleSearch}><FaSearch /></button>
            </div>
            {/* Hamburger menu for mobile */}
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Navigation links */}
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link to="/">Shop</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/About">About Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
