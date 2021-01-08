import React, { Component } from "react";
import "./product.css";
import blog01 from "../images/blog01.jpg";
import index2_product1 from "../images/index2_product1.png";

export default class Product extends Component {
  render() {
    return (
      //  Start main content
      <div className="main-container">
        {/* <section id="content-block" className="slider-area">
          <div className="container">
            <div className="content-push">
              <div className="row">
                <div className="col-md-3">
                  <div className="sidebar-navigation">
                    <div className="title">
                      Product Categories
                      <i className="fa fa-angle-down" />
                    </div>
                    <div className="list">
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Evening dresses
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Jackets and coats
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Tops and Sweatshirts
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Shirts
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Trousers and Shorts
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Evening dresses
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Jackets and coats
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Tops and Sweatshirts
                        </span>
                      </a>
                      <a className="entry" href="#">
                        <span>
                          <i className="fa fa-angle-right" />
                          Shirts
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="header_slider">
                    <article className="boss_slider">
                      <div className="tp-banner-container">
                        <div className="tp-banner tp-banner0">
                          <ul> */}
                            {/* SLIDE  */}
                            {/* <li> */}
                              {/* MAIN IMAGE */}
                              {/* <img src={blog01} alt="slidebg1" width={820} />
                            </li>
                          </ul>
                        </div> */}
                        {/* /.tp-banner */}
                      {/* </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="shop" className="shop-4 pt-0">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 shop-filter">
                <ul className="list-inline">
                  <li>
                    <a className="active-filter" href="#" data-filter="*">
                      All Products
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter="filter-best">
                      Best Selling
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter="filter-featured">
                      Featured
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter="filter-sale">
                      On Sale
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="shop-all" className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 product-item " id ="filter-best">
                <div className="product-img">
                <img src={blog01}
width={270}
height={343}
                  alt="product" />
                  <div className="product-hover">
                    <div className="product-cart">
                      <a className="btn btn-secondary btn-block" href="#">
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                {/* .product-img end */}
                <div className="product-bio">
                  <h4>
                    <a href="#">Modern Watch</a>
                  </h4>
                  <p className="product-price">$68.00</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 product-item filter-sale">
                <div className="product-img">
                  <img src={blog01}
width={270}
height={343}
                  alt="product" />
                  <div className="product-sale">sale</div>
                  <div className="product-hover">
                    <div className="product-cart">
                      <a className="btn btn-secondary btn-block" href="#">
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                {/* .product-img end */}
                <div className="product-bio">
                  <h4>
                    <a href="#">Titan Measures</a>
                  </h4>
                  <p className="product-price">
                    <span>$40.00</span>
                    $32.00
                  </p>
                </div>
                {/* .product-bio end */}
              </div>
              {/* .product-item end */}
              <div className="col-xs-12 col-sm-6 col-md-3 product-item filter-best">
            <div className="product-img">
            <img src={blog01}
width={270}
height={343}
                  alt="product" />
              <div className="product-hover">
                <div className="product-cart">
                  <a className="btn btn-secondary btn-block" href="#">Add To Cart</a>
                </div>
              </div>
            </div>
            {/* .product-img end */}
            <div className="product-bio">
              <h4>
                <a href="#">Charger/Radio</a>
              </h4>
              <p className="product-price">$180.00</p>
            </div>
            {/* .product-bio end */}
          </div>
           {/* Product Item #4 */}
           <div className="col-xs-12 col-sm-6 col-md-3 product-item filter-featured">
            <div className="product-img">
            <img src={blog01}
width={270}
height={343}
                  alt="product" />
              <div className="product-hover">
                <div className="product-cart">
                  <a className="btn btn-secondary btn-block" href="#">Add To Cart</a>
                </div>
              </div>
            </div>
            {/* .product-img end */}
            <div className="product-bio">
              <h4>
                <a href="#">Plate Compactor</a>
              </h4>
              <p className="product-price">$230.00</p>
            </div>
            {/* .product-bio end */}
          </div>
          {/* .product-item end */}
           {/* Product Item #5 */}
           <div className="col-xs-12 col-sm-6 col-md-3 product-item filter-best">
            <div className="product-img">
            <img src={blog01}
width={270}
height={343}
                  alt="product" />
              <div className="product-hover">
                <div className="product-cart">
                  <a className="btn btn-secondary btn-block" href="#">Add To Cart</a>
                </div>
              </div>
            </div>
            {/* .product-img end */}
            <div className="product-bio">
              <h4>
                <a href="#">Black Tape</a>
              </h4>
              <p className="product-price">$12.00</p>
            </div>
            {/* .product-bio end */}
          </div>
          {/* .product-item end */}
           {/* Product Item #6 */}
           <div className="col-xs-12 col-sm-6 col-md-3 product-item filter-best filter-featured">
            <div className="product-img">
            <img src={blog01}
width={270}
height={343}
                  alt="product" />
              <div className="product-hover">
                <div className="product-cart">
                  <a className="btn btn-secondary btn-block" href="#">Add To Cart</a>
                </div>
              </div>
            </div>
            {/* .product-img end */}
            <div className="product-bio">
              <h4>
                <a href="#">ICS Concrete Saw</a>
              </h4>
              <p className="product-price">$40.00</p>
            </div>
            {/* .product-bio end */}
          </div>
          {/* .product-item end */}
          {/* Product Item #7 */}
          <div className="col-xs-12 col-sm-6 col-md-3 product-item filter-featured">
            <div className="product-img">
            <img src={blog01}
width={270}
height={343}
                  alt="product" />
              <div className="product-new">
                new
              </div>
              <div className="product-hover">
                <div className="product-cart">
                  <a className="btn btn-secondary btn-block" href="#">Add To Cart</a>
                </div>
              </div>
            </div>
            {/* .product-img end */}
            <div className="product-bio">
              <h4>
                <a href="#">NorthStar Asphalt</a>
              </h4>
              <p className="product-price">$150.00</p>
            </div>
            {/* .product-bio end */}
          </div>
          {/* .product-item end */}
          {/* Product Item #8 */}
          <div className="col-xs-12 col-sm-6 col-md-3 product-item filter-best">
            <div className="product-img">
            <img src={blog01}
width={270}
height={343}
                  alt="product" />
              <div className="product-hover">
                <div className="product-cart">
                  <a className="btn btn-secondary btn-block" href="#">Add To Cart</a>
                </div>
              </div>
            </div>
            {/* .product-img end */}
            <div className="product-bio">
              <h4>
                <a href="#">Keson Fiberglass</a>
              </h4>
              <p className="product-price">$550.00</p>
            </div>
            {/* .product-bio end */}
            </div>

            </div>
              {/* .row end */}
              <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 text-center">
            <a className="btn btn-secondary" href="#">more products <i className="fa fa-plus ml-xs" /></a>
          </div>
          {/* .col-md-12 end */}
        </div>
        {/* .row End */}
          </div>
        </section>

      </div>
    );
  }
}
