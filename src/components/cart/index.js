import React from "react";
import "./style.css";
import PropTypes from "prop-types"
import { formatNumberWithCurrency } from "../../utils";
import List from "../list";
import Head from "../head";

function Cart({ totalPrice, cartList, onDeleteItemFromCart }) {
  return (
    <div className="Cart">
      <div className="Cart-items">
        <List
          list={cartList}
          buttonName={"Удалить"}
          onButtonCLick={onDeleteItemFromCart}
        />
      </div>
      <div className="Cart-result">
        <span className="Cart-result-name">Итого:</span>
        <span className="Cart-result-price">{formatNumberWithCurrency(totalPrice)}</span>
      </div>
    </div>
  );
}

Cart.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteItemFromCart: PropTypes.func
}

Cart.defaultProp = {
    onDeleteItemFromCart: () => {}
}

export default React.memo(Cart);
