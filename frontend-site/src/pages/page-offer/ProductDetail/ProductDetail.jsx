import React from "react";
import Rating from "./content/Rating";
import Stock from "./content/Stock";
import Price from "./content/Price";
import Sold from "./content/Sold";
import Offer from "./content/Offer";
import Type from "./content/Type";
import AddToCart from "./content/AddToCart";
import Information from "./content/description/Information";
import Detail from "./content/description/Detail";
import Customer from "./content/description/Customer";
import Review from "./content/description/Review";

export default function ProductDetail() {
  return (
    <div className="item">
      <h1>Happy Sailed Women's Summer Boho Florial</h1>
      <div className="content">
        <Rating />
        <Stock />
        <Price />
        {/* <div class="colors">
                      <p>Color</p>
                      <div class="variant">
                        <form action="">
                          <p>
                            <input
                              type="radio"
                              name="color"
                              id="cogrey"
                            />
                            <label for="cogrey" class="circle"></label>
                          </p>
                          <p>
                            <input
                              type="radio"
                              name="color"
                              id="coblue"
                            />
                            <label for="coblue" class="circle"></label>
                          </p>
                          <p>
                            <input
                              type="radio"
                              name="color"
                              id="cogreen"
                            />
                            <label for="cogreen" class="circle"></label>
                          </p>
                        </form>
                      </div>
                    </div> */}
        <Sold />
        <Offer />
        <Type />
        <AddToCart />
        <div className="description collapse">
          <ul>
            <Information />
            <Detail />
            <Customer />
            <Review />
          </ul>
        </div>
      </div>
    </div>
  );
}
