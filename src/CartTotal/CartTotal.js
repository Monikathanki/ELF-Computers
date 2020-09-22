import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat';


function CartTotal({ selected }) {
  let total = Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0.0
  );

  return (
    <div className="summary_total">
      <div className="summary_total_label">Total</div>
      <div className="Summary_total_value">
        {USCurrencyFormat.format(total)}
      </div>
    </div>
  );
}

export default CartTotal;