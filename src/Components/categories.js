import React, { Component } from "react";
import "./categories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import medicinalplants from "./images1/medicinalplants.jpg";
import airpurifyingplants from "./images1/airpurifyingplants.jpg";
import bonsaiplants from "./images1/bonsaiplants.jpg";
import floweringplants from "./images1/floweringplants.jpg";
import indoorplants from "./images1/indoorplants.jpg";
import bambooplants from "./images1/bambooplants.jpg";
import banner1 from "./images1/banner1.png";
import banner2 from "./images1/banner2.jpg";
import banner3 from "./images1/banner3.png";
import Background from "./images1/Background.jpg";
import Background1 from './images1/Background1.jpg';
import Background2 from './images1/Background2.jpg';



import camera from "./images1/camera.png";

export default class Categories extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 5,
      },
    };

    return (
      <div className="header-slider-part">
        <h2 className="title text-center mb-4">Explore Popular Categories</h2>

        <div>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            // showDots={true}
            ssr={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <a href="/plants/type/medicinal">
                <img
                  src={medicinalplants}
                  alt="Medicinal Plants"
                  title="Medicinal Plants"
                />
                <span>Medicinal Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/air-purifying">
                <img
                  src={airpurifyingplants}
                  alt="Air Purifying Plants"
                  title="Air Purifying Plants"
                />
                <span>Air Purifying Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/indoor">
                <img
                  src={indoorplants}
                  alt="Indoor Plants"
                  title="Indoor Plants"
                />
                <span>Indoor Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/lucky-bamboo">
                <img
                  src={bambooplants}
                  alt="Lucky Bamboo Plants"
                  title="Lucky Bamboo Plants"
                />
                <span> Bamboo Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/bonsai">
                <img
                  src={bonsaiplants}
                  alt="Bonsai Plants"
                  title="Bonsai Plants"
                />
                <span>Bonsai Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/flowering">
                <img
                  src={floweringplants}
                  alt="Flowering Plants"
                  title="Flowering Plants"
                />
                <span>Flowering Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/medicinal">
                <img
                  src={medicinalplants}
                  alt="Medicinal Plants"
                  title="Medicinal Plants"
                />
                <span>Medicinal Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/air-purifying">
                <img
                  src={airpurifyingplants}
                  alt="Air Purifying Plants"
                  title="Air Purifying Plants"
                />
                <span>Air Purifying Plants</span>
              </a>
            </div>
            <div>
              <a href="/plants/type/indoor">
                <img
                  src={indoorplants}
                  alt="Indoor Plants"
                  title="Indoor Plants"
                />
                <span>Indoor Plants</span>
              </a>
            </div>
          </Carousel>
        </div>
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="banner banner-group banner-overlay banner-overlay-light">
                  <a href="/react/molla/demo-4/shop/sidebar/list">
                    <img src={banner1} alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="/react/molla/demo-4/shop/sidebar/list">
                        Smart Offer
                      </a>
                    </h4>
                    <h3 className="banner-title">
                      <a href="/react/molla/demo-4/shop/sidebar/list">
                        Save $150{" "}
                        <strong>
                          on Samsung <br />
                          Galaxy Note9
                        </strong>
                      </a>
                    </h3>
                    <a
                      className="banner-link"
                      href="/react/molla/demo-4/shop/sidebar/list"
                    >
                      Shop Now
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="banner banner-group banner-overlay banner-overlay-light">
                  <a href="/react/molla/demo-4/shop/sidebar/list">
                    <img src={banner2} alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="/react/molla/demo-4/shop/sidebar/list">
                        Time Deals
                      </a>
                    </h4>
                    <h3 className="banner-title">
                      <a href="/react/molla/demo-4/shop/sidebar/list">
                        <strong>
                          Bose SoundSport <br />
                          Time Deal -30%
                        </strong>
                      </a>
                    </h3>
                    <a
                      className="banner-link"
                      href="/react/molla/demo-4/shop/sidebar/list"
                    >
                      Shop Now
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="banner banner-group banner-overlay banner-overlay-light">
                  <a href="/react/molla/demo-4/shop/sidebar/list">
                    <img src={banner3} alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="/react/molla/demo-4/shop/sidebar/list">
                        Clearance
                      </a>
                    </h4>
                    <h3 className="banner-title">
                      <a href="/react/molla/demo-4/shop/sidebar/list">
                        <strong>
                          GoPro - Fusion 360 <br />
                          Save $70
                        </strong>
                      </a>
                    </h3>
                    <a
                      className="banner-link"
                      href="/react/molla/demo-4/shop/sidebar/list"
                    >
                      Shop Now
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="cta cta-border mb-5"
            style={{
              backgroundImage: "url(" + Background + ")",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={camera} alt="camera" className="cta-img" />
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="cta-content" style={{ display: "flex" }}>
                  <div className="cta-text text-right text-white">
                    <p>
                      Shop Today’s Deals <br />
                      <strong>Awesome Made Easy. HERO7 Black</strong>
                    </p>
                  </div>
                  <a
                    className="btn btn-primary btn-round"
                    href="/react/molla/demo-4/shop/sidebar/list"
                  >
                    <span>Shop Now - $429.99</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="heading text-center mb-3">
            <h2 className="title">Deals &amp; Outlet</h2>
            <p className="title-desc">Today’s deal and more</p>
          </div>
          <div className="row">
            <div className="col-lg-6 deal-col">
              <div
                className="deal"
                style={{
                  backgroundImage: "url(" + Background1 + ")",
                }}
              >
                <div className="deal-top">
                  <h2>Deal of the Day.</h2>
                  <h4>Limited quantities.</h4>
                </div>
                <div className="deal-content">
                  <h3 className="product-title">
                    <a href="/react/molla/demo-4/product/default/27">
                      Home Smart Speaker with Google Assistant
                    </a>
                  </h3>
                  <div className="product-price">
                    <span className="new-price">$129.00</span>
                    <span className="old-price">Was $150.99</span>
                  </div>
                  <a
                    className="btn btn-link"
                    href="/react/molla/demo-4/shop/sidebar/list"
                  >
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                <div className="deal-bottom">
                  <div className="deal-countdown offer-countdown">
                    <span className="count-row countdown-show4">
                      <span className="countdown-section">
                        <span className="countdown-amount">1</span>
                        <span className="countdown-period">Days</span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount">0</span>
                        <span className="countdown-period">Hours</span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount">12</span>
                        <span className="countdown-period">Minutes</span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount">4</span>
                        <span className="countdown-period">Seconds</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 deal-col">
              <div
                className="deal"
                style={{
                  backgroundImage: "url(" + Background2 + ")",
                }}
              >
                <div className="deal-top">
                  <h2>Your Exclusive Offers.</h2>
                  <h4>Sign in to see amazing deals.</h4>
                </div>
                <div className="deal-content">
                  <h3 className="product-title">
                    <a href="/react/molla/demo-4/product/default/27">
                      Certified Wireless Charging Pad for iPhone / Android
                    </a>
                  </h3>
                  <div className="product-price">
                    <span className="new-price">$29.99</span>
                  </div>
                  <a
                    className="btn btn-link"
                    href="/react/molla/demo-4/shop/sidebar/list"
                  >
                    <span>Sign In and Save money</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                <div className="deal-bottom">
                  <div className="deal-countdown offer-countdown">
                    <span className="count-row countdown-show4">
                      <span className="countdown-section">
                        <span className="countdown-amount">1</span>
                        <span className="countdown-period">Days</span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount">0</span>
                        <span className="countdown-period">Hours</span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount">12</span>
                        <span className="countdown-period">Minutes</span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount">4</span>
                        <span className="countdown-period">Seconds</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="icon-boxes-container bg-transparent">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark"><i className="icon-rocket" /></span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Free Shipping</h3>
              <p>Orders $50 or more</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark"><i className="icon-rotate-left" /></span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Free Returns</h3>
              <p>Within 30 days</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark"><i className="icon-info-circle" /></span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
              <p>When you sign up</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark"><i className="icon-life-ring" /></span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">We Support</h3>
              <p>24/7 amazing services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


      </div>
    );
  }
}
