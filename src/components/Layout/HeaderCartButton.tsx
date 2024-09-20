import React from 'react';
import headerCartButtonCss from '../../assets/css/Layout/HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

type HeaderCartButtonProps = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
  return (
    <button className={headerCartButtonCss.button} onClick={onClick}>
      <span className={headerCartButtonCss.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={headerCartButtonCss.badge}>6</span>
    </button>
  );
};

export default HeaderCartButton;
