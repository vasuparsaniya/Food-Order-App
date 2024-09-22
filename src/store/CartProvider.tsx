import React, { useReducer } from 'react';
import CartContext, { CartContextType, ItemInCartType } from './CartContext';

export type CartProviderProps = {
  children: React.ReactNode;
};

type DefaultCartStateType = {
  items: ItemInCartType[];
  totalAmount: number;
};

type ActionType =
  | { type: 'ADD'; item: ItemInCartType }
  | { type: 'REMOVE'; id: number };

const defaultCartState: DefaultCartStateType = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: DefaultCartStateType, action: ActionType) => {
  switch (action.type) {
    case 'ADD':
      console.log('=======state', state);
      console.log('=======action', action);
      const updatedItems = state.items.concat(action.item);
      const updateTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;
      return { items: updatedItems, totalAmount: updateTotalAmount };
    case 'REMOVE':
      break;
    default:
      throw new Error('Unknown cart action type');
  }
  return defaultCartState;
};

const CartProvider = ({ children }: CartProviderProps) => {
  // ** states
  const [cartState, disPatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item: ItemInCartType) => {
    disPatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id: number) => {
    disPatchCartAction({ type: 'REMOVE', id: id });
  };

  console.log('==========cartState', cartState);
  const cartContext: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
