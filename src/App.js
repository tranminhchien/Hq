import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (

    <div>

      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope" />
                congnghehq@gmail.com
               </div>
              <div className="phone-service">
                <i className=" fa fa-phone" />
            +84 932.765.989
          </div>
            </div>
            <div className="ht-right">
              <a href="#" className="login-panel"><i className="fa fa-user" />Login</a>
              <div className="lan-selector">
                <select className="language_drop" name="countries" id="countries" style={{ width: '300px' }}>
                  <option value="yt" data-image="img/flag-1.jpg" data-imagecss="flag yt" data-title="English">English</option>
                  <option value="yu" data-image="img/flag-2.jpg" data-imagecss="flag yu" data-title="Bangladesh">German </option>
                </select>
              </div>
              <div className="top-social">
                <a href="#"><i className="ti-facebook" /></a>
                <a href="#"><i className="ti-twitter-alt" /></a>
                <a href="#"><i className="ti-linkedin" /></a>
                <a href="#"><i className="ti-pinterest" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="advanced-search">
                  <button type="button" className="category-btn">All Categories</button>
                  <div className="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button"><i className="ti-search" /></button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right col-md-3">
                <ul className="nav-right">
                  <li className="heart-icon">
                    <a href="#">
                      <i className="icon_heart_alt" />
                      <span>1</span>
                    </a>
                  </li>
                  <li className="cart-icon">
                    <a href="#">
                      <i className="icon_bag_alt" />
                      <span>3</span>
                    </a>
                    <div className="cart-hover">
                      <div className="select-items">
                        <table>
                          <tbody>
                            <tr>
                              <td className="si-pic"><img src="img/select-product-1.jpg" alt="" /></td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close" />
                              </td>
                            </tr>
                            <tr>
                              <td className="si-pic"><img src="img/select-product-2.jpg" alt="" /></td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="select-total">
                        <span>total:</span>
                        <h5>$120.00</h5>
                      </div>
                      <div className="select-button">
                        <a href="#" className="primary-btn view-card">VIEW CARD</a>
                        <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                      </div>
                    </div>
                  </li>
                  <li className="cart-price">$150.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <div className="container">
            <div className="nav-depart">
              <div className="depart-btn">
                <i className="ti-menu" />
                <span>All departments</span>
                <ul className="depart-hover">
                  <li className="active"><a href="#">Women’s Clothing</a></li>
                  <li><a href="#">Men’s Clothing</a></li>
                  <li><a href="#">Underwear</a></li>
                  <li><a href="#">Kid's Clothing</a></li>
                  <li><a href="#">Brand Fashion</a></li>
                  <li><a href="#">Accessories/Shoes</a></li>
                  <li><a href="#">Luxury Brands</a></li>
                  <li><a href="#">Brand Outdoor Apparel</a></li>
                </ul>
              </div>
            </div>
            <nav className="nav-menu mobile-menu">
              <ul>
                <li className="active"><a href="./index.html">Home</a></li>
                <li><a href="./shop.html">Shop</a></li>
                <li><a href="#">Collection</a>
                  <ul className="dropdown">
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Kid's</a></li>
                  </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li><a href="#">Pages</a>
                  <ul className="dropdown">
                    <li><a href="./blog-details.html">Blog Details</a></li>
                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                    <li><a href="./check-out.html">Checkout</a></li>
                    <li><a href="./faq.html">Faq</a></li>
                    <li><a href="./register.html">Register</a></li>
                    <li><a href="./login.html">Login</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap" />
          </div>
        </div>
      </header>
   
      <section className="hero-section container">
        <div className="hero-items owl-carousel">
          <div className="single-hero-items set-bg" data-setbg="img/hero-1.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore</p>
                  <a href="#" className="primary-btn">Shop Now</a>
                </div>
              </div>
              <div className="off-card">
                <h2>Sale <span>50%</span></h2>
              </div>
            </div>
          </div>
          <div className="single-hero-items set-bg" data-setbg="img/hero-2.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore</p>
                  <a href="#" className="primary-btn">Shop Now</a>
                </div>
              </div>
              <div className="off-card">
                <h2>Sale <span>50%</span></h2>
              </div>
            </div>
          </div>
        </div>
      </section>
     
        
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-left">
                <div className="footer-logo">
                  <a href="#"><img src="img/logo.png" alt="" /></a>
                </div>
                <ul>
                  <li>Address: 6/1B Nguyễn Thị Búp KP. 1 P. Hiệp Thành TP. Hồ Chí Minh</li>
                  <li>Phone: +84 932.765.989</li>
                  <li>Email: congnghehq@gmail.com</li>
                </ul>
                <div className="footer-social">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <div className="footer-widget">
                <h5>Information</h5>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Serivius</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget">
                <h5>My Account</h5>
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Shopping Cart</a></li>
                  <li><a href="#">Shop</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="newslatter-item">
                <h5>Join Our Newsletter Now</h5>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <form action="#" className="subscribe-form">
                  <input type="text" placeholder="Enter Your Mail" />
                  <button type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-reserved">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
                <div className="payment-pic">
                  <img src="%PUBLIC_URL%/img/payment-method.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
    </div>


  );
}

export default App;
