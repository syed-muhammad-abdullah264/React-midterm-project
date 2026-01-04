import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import {
  BsFillMenuButtonWideFill,
  BsCart4,
  BsExclamationCircleFill,
} from "react-icons/bs";
import styles from "./index.module.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className={styles.addToCarticon}>
        <button type="button" className={styles.cartLink}>
          <BsCart4 className={styles.Icon} />
        </button>
        <Link to="/support" className={styles.supportLink}>
          <BsExclamationCircleFill className={styles.Icon} />
        </Link>
      </div>
      <nav className={styles.nav} id="nav">
        <h1 className={styles.logo}>Abdullah Express</h1>
        <div className={styles.links}>
          <a href="#Products">Products</a>
          <a href="#Features">Features</a>
          <Link to="/support">Support</Link>
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
        <a
          href="#Products"
          className={styles.mobileMenuItem}
          onClick={() => setMenuOpen(false)}
        >
          Products
        </a>
        <a
          href="#Features"
          className={styles.mobileMenuItem}
          onClick={() => setMenuOpen(false)}
        >
          Features
        </a>
        <Link
          to="/support"
          className={styles.mobileMenuItem}
          onClick={() => setMenuOpen(false)}
        >
          Support
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
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>
            Delivering Excellence, One Package at a Time
          </h2>
          <p className={styles.bannerSubtitle}>
            Reliable and Fast Delivery Services Tailored for You
          </p>
          <button className={styles.bannerButton}>Learn More</button>
        </div>
      </section>
      <section className={styles.productsSection} id="Products">
        <h1>10+</h1>
        <h2 className={styles.productsTitle}>Our Products</h2>
        <p className={styles.productsSubtitle}>
          Explore our range of delivery solutions designed to meet your needs.
        </p>
        <div className={styles.productsGrid}>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/1.jpeg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/2.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/3.webp"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/4.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/5.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/6.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/7.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/8.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/9.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.productCard}>
              <img
                src="/assets/images/home/10.jpg"
                alt="Product"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Express Delivery</h3>
              <p className={styles.productPrice}>From $10</p>
              <Link to="/p-d-8" className={styles.productDetailsLink}>
                {" "}
                Product Details
              </Link>
              <button className={styles.addToCartBtn}>
                {""}
                <BsCart4 className={styles.cartBtnIcon} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.featuresSection} id="Features">
        <h2 className={styles.featuresTitle}>Features</h2>
        <Carousel className={styles.carouselContainer}>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/assets/images/home/f1.avif"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/assets/images/home/f2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/assets/images/home/f3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className={styles.featuresContent}>
          <div className={styles.featureItem}>
            <h3 className={styles.featureTitle}>Fast Delivery</h3>
            <p className={styles.featureDescription}>
              Get your products delivered quickly and efficiently.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3 className={styles.featureTitle}>Quality Products</h3>
            <p className={styles.featureDescription}>
              We offer only the best quality products for our customers.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3 className={styles.featureTitle}>Easy Returns</h3>
            <p className={styles.featureDescription}>
              If you're not satisfied, we'll make it right with easy returns.
            </p>
          </div>
        </div>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredItem}>
            <img
              src="/assets/images/home/fp1.png"
              alt="Featured"
              className={styles.featuredImage}
            />
            <h3 className={styles.featuredName}>Premium Shipping</h3>
          </div>
          <div className={styles.featuredItem}>
            <img
              src="/assets/images/home/fp2.png"
              alt="Featured"
              className={styles.featuredImage}
            />
            <h3 className={styles.featuredName}>Premium Shipping</h3>
          </div>
          <div className={styles.featuredItem}>
            <img
              src="/assets/images/home/fp3.avif"
              alt="Featured"
              className={styles.featuredImage}
            />
            <h3 className={styles.featuredName}>Premium Shipping</h3>
          </div>
        </div>
      </section>
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
                  <a href="#nav">Home</a>
                </li>
                <li>
                  <a href="#Products">Products</a>
                </li>
                <li>
                  <Link to="/support">Support</Link>
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
    </div>
  );
};

export default Home;
