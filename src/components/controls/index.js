import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { formatNumberWithCurrency, plural } from "../../utils";
import Button from "../button";

function Controls({ onCLick, itemCount, totalPrice }) {
  return (
    <div className="Controls">
      <div>
        В корзине:
        <span className="Controls-cartInfo">
          {itemCount > 0
            ? `${itemCount} ${plural(itemCount, {
                one: "товар",
                few: "товара",
                many: "товаров",
              })} / ${formatNumberWithCurrency(totalPrice)}`
            : "пусто"}
        </span>
      </div>
      <Button onClick={itemCount > 0 ? () => onCLick() : () => {}}>Перейти</Button>
    </div>
  );
}

Controls.propTypes = {
  onCLick: PropTypes.func,
  itemCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

Controls.defaultProps = {
  onCLick: () => {},
};

export default React.memo(Controls);
