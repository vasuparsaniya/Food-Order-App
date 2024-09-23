import classes from '../../assets/css/Cart/CartItem.module.css';
import { ItemInCartType } from '../../store/CartContext';

type CartItemProps = {
  cartItem: ItemInCartType;
  // eslint-disable-next-line no-unused-vars
  onRemove: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  onAdd: (item: ItemInCartType) => void;
};

const CartItem = ({ cartItem, onRemove, onAdd }: CartItemProps) => {
  const modifiedPrice = `$${cartItem.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{cartItem.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{modifiedPrice}</span>
          <span className={classes.amount}>x {cartItem.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => onRemove(cartItem.id)}>−</button>
        <button onClick={() => onAdd(cartItem)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
