import { createContext } from 'react';
import { AvailableMeal } from '../data/AvailableMeals';

export type ItemInCartType = Omit<AvailableMeal, 'description'>;

export type CartContextType = {
  items: ItemInCartType[];
  totalAmount: number;
  // eslint-disable-next-line no-unused-vars
  addItem: (item: ItemInCartType) => void;
  // eslint-disable-next-line no-unused-vars
  removeItem: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
