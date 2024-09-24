import React, { useContext, useEffect, useState } from 'react';
import headerCartButtonCss from '../../assets/css/Layout/HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

type HeaderCartButtonProps = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: HeaderCartButtonProps) => {
  // ** use context hook
  const cartCtx = useContext(CartContext);

  // ** state **
  const [btnIsHighlighted, setBtnIsHighlighted] = useState<boolean>(false);

  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const btnClasses = `${headerCartButtonCss.button} ${btnIsHighlighted ? headerCartButtonCss.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    //---- after we remove that animation class
    const removeAnimationClassTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 600);

    return () => {
      clearTimeout(removeAnimationClassTimer);
    };
  }, [numberOfCartItems]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={headerCartButtonCss.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={headerCartButtonCss.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
