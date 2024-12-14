import React from "react";

const PriceSummary = (props) => {
  const { pricingData, selectedOption } = props;
  return (
    <>
      <div className="summary">
        <div className="summary-pricing">
          <p className="summary-pricing-title">Free Delivery</p>
          <p className="summary-total-price">
            Total: $ {pricingData.find((p) => p.units === selectedOption).price}{" "}
            USD
          </p>
        </div>
        <button className="add-to-cart">+ Add to Cart</button>
      </div>
    </>
  );
};

export default PriceSummary;
