import classes from '../../assets/css/Cart/Cart.module.css';
import { CART_ITEMS, CartItemsType } from '../../data/CartItems';
import Modal from '../UI/Modal';

type CartProps = {};

const Cart = ({}: CartProps) => {
  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {CART_ITEMS.map((item: CartItemsType) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
