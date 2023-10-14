import React from "react";
import SideBar from './sidebar/SideBar';
import Detail from './../page-offer/ProductDetail/content/description/Detail';
import NavigationCat from './section/NavigationCat';
import Product from './product/Product';
import Banners from './../banners/Banners';
import Modal from "../../components/Modal";


export default function PageCategory() {
  return (
    <>
      <div className="single-category">
        <div className="container">
          <div className="wrapper">
            <div className="column">
              <div className="holder">
                <div className="row sidebar">
                  <div className="filter">
                    <SideBar />

                    <div className="filter-block">
                      <button
                        type="submit"
                        className="primary-button"
                        onclick="submitFilters()"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="row">
                    <div className="cat-head">
                      <Detail />
                      <div className="cat-navigation flexitem">
                        <NavigationCat />
                      </div>
                    </div>
                  </div>

                  <Product />

                  <div className="load-more flexcenter">
                    <a href="#" className="secondary-button">
                      Load more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banners />
      <Modal />
    </>
  );
}
