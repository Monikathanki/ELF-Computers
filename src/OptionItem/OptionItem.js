import React from "react";
import USCurrencyFormat from "../USCurrencyFormat";

function OptionItem({ item, feature, itemHash, checked, onUpdateFeature }) {
  return (
    <div className="feature_item">
      <input
        type="radio"
        id={itemHash}
        className="feature_option"
        name={slugify(feature)}
        checked={checked}
        onChange={(e) => onUpdateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature_label">
        {item.name} ({USCurrencyFormat(item.cost)})
      </label>
    </div>
  );
}

OptionItem.defaultProps = {
  itemHash: "",
  item: {},
  feature: "",
  checked: false,
};

export default OptionItem;
