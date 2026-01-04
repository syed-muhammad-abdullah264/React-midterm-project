import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useState } from "react";

const ProductDetail = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Abdullah Express</h1>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Features</Link>
        </div>
        <div>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <BsFillMenuButtonWideFill />
          </button>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signUpBtn}>Sign Up</button>
        </div>
      </nav>
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <Link
          to="/"
          className={styles.mobileMenuItem}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/"
          className={styles.mobileMenuItem}
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/"
          className={styles.mobileMenuItem}
          onClick={() => setMenuOpen(false)}
        >
          Features
        </Link>
        <div className={styles.mobileMenuButtons}>
          <button
            className={styles.loginBtn}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </button>
          <button
            className={styles.signUpBtn}
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className={styles.productDetail}>
        <img
          src="/assets/images/home/10.jpg"
          alt="Product"
          className={styles.productImage}
        />
        <h2 className={styles.productName}>Product Name</h2>
        <h3 className={styles.productPrice}>$99.99</h3>
        <p className={styles.productDescription}>
          This is where the product details will be displayed.
        </p>
        <h3 className={styles.productDescriptionTitle}>Description</h3>
        <p className={styles.productDescriptionText}>
          {" "}
          This product is made from high-quality materials and offers excellent
          value for money. It is designed to meet the needs of our customers and
          provide a great user experience.
        </p>
        <button className={styles.addToCartButton}>Add to Cart</button>
        <button className={styles.buyNowButton}>Buy Now</button>
        <Link to="/" className={styles.backLink}>
          Back to Home
        </Link>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h3>Abdullah Express</h3>
              <p>
                Premium quality product in best price. We bring you authentic
                Jazmin products directly from the artisans.
              </p>
              <div className={styles.footerSocial}>
                <div>
                  <i className="fab fa-facebook-f">
                    <img
                      src="/assets/images/home/facebook.png"
                      alt="Facebook"
                      className={styles.socialImg}
                    ></img>
                  </i>
                </div>
                <div>
                  <i className="fab fa-instagram">
                    <img
                      src="/assets/images/home/instagram.jpg"
                      alt="Instagram"
                      className={styles.socialImg}
                    ></img>
                  </i>
                </div>
                <div>
                  <i className="fab fa-whatsapp">
                    <img
                      src="/assets/images/home/whatsapp.jpg"
                      alt="WhatsApp"
                      className={styles.socialImg}
                    ></img>
                  </i>
                </div>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h3>Customer Service</h3>
              <ul>
                <li>My Account </li>
                <li>Order Tracking </li>
                <li>Wishlist </li>
                <li>Shipping Policy </li>
                <li>Returns & Exchanges</li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h3>Contact Us</h3>
              <ul className={styles.contactInfo}>
                <li>
                  <i className="fas fa-map-marker-alt"></i> 123 Shopping Street,
                  Karachi, Pakistan
                </li>
                <li>
                  <i className="fas fa-phone"></i> +92 300 1234567
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@Jazmincollection.com
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Abdullah Express. All Rights Reserved.</p>
            <div className={styles.paymentMethods}>
              <img src="/assets/images/home/visa.png" alt="Visa" />
              <img src="/assets/images/home/mastercard.png" alt="Mastercard" />
              <img src="/assets/images/home/jazzcash.png" alt="JazzCash" />
              <img src="/assets/images/home/easypaisa.jpg" alt="EasyPaisa" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProductDetail;
