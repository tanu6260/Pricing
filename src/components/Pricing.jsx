import React, { useState } from "react";
import "./style.css";
import PricingCard from "./PricingCard";
import PriceSummary from "./PriceSummary";

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState(2);
  const [sizes, setSizes] = useState(["S", "S", "S"]);
  const [colors, setColors] = useState(["Black", "", ""]);

  const handleSizeChange = (index, value) => {
    const updatedSizes = [...sizes];
    updatedSizes[index] = value;
    setSizes(updatedSizes);
  };

  const handleColorChange = (index, value) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  const pricingData = [
    { units: 1, discount: 10, price: 10.0, standardTag: true },
    { units: 2, discount: 20, price: 18.0, mostPopular: true },
    { units: 3, discount: 30, price: 24.0 },
  ];

  return (
    <>
      <div className="pricing-container">
        <div className="pricing-title">YAY! It's BOGO</div>
        <div className="pricing-options">
          {pricingData.map((option, index) => (
            <div
              key={index}
              className={`pricing-option ${
                selectedOption === option.units ? "selected" : ""
              }`}
            >
              {option.mostPopular && (
                <div className="most-popular-tag">MOST POPULAR</div>
              )}

              <label htmlFor={`option-${option.units}`}>
                <div className="option-header">
                  <span className="option-tag">
                    <span>
                      <input
                        type="radio"
                        id={`option-${option.units}`}
                        name="pricing"
                        checked={selectedOption === option.units}
                        onChange={() => setSelectedOption(option.units)}
                      />
                    </span>
                    <span className="unit">
                      <span>{option.units} Unit</span>
                      {option.standardTag && <span className="unit-standard">Standard Price</span>}
                    </span>
                    <span className="discount">{option.discount}% Off</span>
                  </span>

                  <span className="price">
                    <span> ${option.price.toFixed(2)} USD</span>
                    <span className="strike-price">$24.00 USD</span>
                  </span>
                </div>
                {selectedOption === option.units && (
                  <PricingCard
                    sizes={sizes}
                    option={option}
                    colors={colors}
                    handleSizeChange={handleSizeChange}
                    handleColorChange={handleColorChange}
                  />
                )}
              </label>
            </div>
          ))}
        </div>
        <PriceSummary
          pricingData={pricingData}
          selectedOption={selectedOption}
        />
      </div>
    </>
  );
};

export default Pricing;
