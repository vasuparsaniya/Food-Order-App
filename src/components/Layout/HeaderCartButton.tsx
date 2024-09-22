import React, { useContext } from 'react';
import headerCartButtonCss from '../../assets/css/Layout/HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

type HeaderCartButtonProps = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
  // ** use context hook
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <button className={headerCartButtonCss.button} onClick={onClick}>
      <span className={headerCartButtonCss.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={headerCartButtonCss.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
