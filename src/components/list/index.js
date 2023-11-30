import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, onButtonCLick, buttonName }) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} onButtonCLick={onButtonCLick} buttonName={buttonName}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onButtonCLick: PropTypes.func,
};

List.defaultProps = {
  onButtonCLick: () => {
  }
}

export default React.memo(List);
