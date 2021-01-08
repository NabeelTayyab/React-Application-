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

export default class Categories extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items:5
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 5
      }
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
                <span>Flowering </span>
              </a>
            </div>
            <div>
              <a href="/plants/type/medicinal">
                <img
                  src={medicinalplants}
                  alt="Medicinal Plants"
                  title="Medicinal Plants"
                />
                <span>Medicinal </span>
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
      </div>
    );
  }
}
