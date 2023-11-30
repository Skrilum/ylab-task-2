import React, {useState} from "react";
import PropTypes from "prop-types";
import { formatNumberWithCurrency } from "../../utils";
import './style.css';
import Button from "../button";

function Item(props) {


  const callbacks = {
    onButtonCLick: () => {
      props.onButtonCLick(props.item);
    },
  }

  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className="Item__info">
        <div className="Item-price">{formatNumberWithCurrency(props.item.price)}</div>
        {props.item.count !== undefined && <div>{props.item.count} шт</div>}
      </div>
      <div className='Item-actions'>
        <Button onClick={callbacks.onButtonCLick}>
          {props.buttonName}
        </Button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    price: PropTypes.number,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([undefined])]),
  }).isRequired,
  onButtonCLick: PropTypes.func,
  buttonName: PropTypes.string
};

Item.defaultProps = {
  onButtonCLick: () => {
  },
  buttonName: "Нажмите"
}

export default React.memo(Item);
