import React from 'react';
import headerCss from '../../assets/css/Layout/Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

type HeaderProps = {
  onShowCart: () => void;
};

const Header = ({ onShowCart }: HeaderProps) => {
  return (
    <>
      <header className={headerCss.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={headerCss['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
