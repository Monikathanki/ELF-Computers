import React from "react";
import OptionItem from '../OptionItem/OptionItem';


function FeatureItem({ feature, onUpdateFeature, options, selected }) {
  let optionItems = options.map((item) => {
    let itemHash = slugify(JSON.stringify(item));
    let checked = item.name === selected[feature].name;
    return (
      <OptionItem
        key={itemHash}
        itemHash={itemHash}
        item={item}
        feature={feature}
        checked={checked}
        onUpdateFeature={onUpdateFeature}
      />
    );
  });

  return (
    <fieldset className="feature">
      <legend className="feature_name">
        <h3>{feature}</h3>
      </legend>
    </fieldset>
  );
}

FeatureItem.defaultProps = {
  feature: "",
  featureHash: "",
  options: [],
  selected: {},
};

export default FeatureItem;