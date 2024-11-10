import { useContext, useState } from 'react';
import classes from '../../assets/css/Cart/Cart.module.css';
import Modal from '../UI/Modal';
import CartContext, { ItemInCartType } from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

type CartProps = {
  onClose: () => void;
};

const Cart = ({ onClose }: CartProps) => {
  // ** State **
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const onRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const onAddHandler = (item: ItemInCartType) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };
  const onCancle = () => {
    setIsCheckout(false);
  };

  return (
    <Modal onclose={onClose}>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item: ItemInCartType, index: number) => (
          <CartItem
            key={index}
            cartItem={item}
            onRemove={onRemoveHandler}
            onAdd={onAddHandler}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancle={onCancle} />}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes['button-alt']} onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
