import React from 'react';
import headerCartButtonCss from '../../assets/css/Layout/HeaderCartButton.module.css';
import CartIcon from '../../assets/css/Cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <button className={headerCartButtonCss.button}>
      <span className={headerCartButtonCss.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={headerCartButtonCss.badge}>6</span>
    </button>
  );
};

export default HeaderCartButton;
