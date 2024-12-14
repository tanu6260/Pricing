import React from "react";

const PricingCard = (props) => {
  const { option, sizes, colors, handleSizeChange, handleColorChange } = props;
  return (
    <>
      <div className="customization">
        {[...Array(option.units)].map((_, i) => (
          <div key={i} className="customization-row">
            <label>#{i + 1}</label>
            <select
              className="customization-dropdown"
              value={sizes[i]}
              onChange={(e) => handleSizeChange(i, e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <select
              className="customization-dropdown"
              value={colors[i]}
              onChange={(e) => handleColorChange(i, e.target.value)}
            >
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingCard;
