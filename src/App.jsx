// Import necessary dependencies from React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import custom components
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import About from "./Components/About";
// Import context provider for the shop
import { ShopContextProvider } from "./Context/shop-context";
// Import pages for routing
import { Cart } from "./Pages/Cart/Cart";
import { Shop } from "./Pages/Shop/shop";
import { Wishlist } from "./Pages/Wishlist/wishList";
import { Item } from "./Pages/Shop/Item";
// Import the CSS file for styling
import "./App.css";

// Define the routes for the application
const routes = [
  { path: "/", element: <Shop /> }, // Route for the shop page
  { path: "/cart", element: <Cart /> }, // Route for the cart page
  { path: "/wishlist", element: <Wishlist /> }, // Route for the wishlist page
  { path: "/product/:productId", element: <Item /> }, // Route for individual product items
  { path: "/About", element: <About/> }, // Route for the about page
  { path: "/footer", element: <Footer /> } // Route for the footer (usually not a separate route)
];

// Define and export the App component
function App() {
  return (
    <div className="App">
      {/* Provide the ShopContext to the entire application */}
      <ShopContextProvider>
        {/* Set up the router for the application */}
        <Router>
          {/* Include the Navbar component at the top */}
          <Navbar />
          {/* Define the routes using the Routes and Route components */}
          <Routes>
            {/* Map over the routes array to create Route components */}
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          {/* Include the Footer component at the bottom */}
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

// Export the App component as the default export
export default App;
