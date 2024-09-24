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
  | { type: 'REMOVE'; id: string };

const defaultCartState: DefaultCartStateType = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: DefaultCartStateType, action: ActionType) => {
  switch (action.type) {
    case 'ADD':
      const existingCartItemIndex: number = state.items.findIndex(
        (item) => item.id === action.item.id,
      );
      const updateTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;
      let updatedItems: ItemInCartType[];
      const existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItem) {
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity,
        };
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return { items: updatedItems, totalAmount: updateTotalAmount };
    case 'REMOVE':
      let updatedItemsAfterRemove;
      let updatedTotalAmountAfterRemove;
      const existingCartItemForRemove = state.items.find(
        (item) => item.id === action.id,
      );
      if (existingCartItemForRemove) {
        updatedTotalAmountAfterRemove =
          state.totalAmount - existingCartItemForRemove.price;
        if (existingCartItemForRemove.quantity === 1) {
          updatedItemsAfterRemove = state.items.filter(
            (item) => item.id !== action.id,
          );
        } else {
          updatedItemsAfterRemove = state.items.map((item) => {
            if (item.id === action.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          });
        }
      } else {
        updatedItemsAfterRemove = state.items;
        updatedTotalAmountAfterRemove = state.totalAmount;
      }
      return {
        items: updatedItemsAfterRemove,
        totalAmount: updatedTotalAmountAfterRemove,
      };
    default:
      console.error('---------Unknown cart action type----------');
      return state;
  }
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

  const removeItemFromCartHandler = (id: string) => {
    disPatchCartAction({ type: 'REMOVE', id: id });
  };

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
