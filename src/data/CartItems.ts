export type CartItemsType = {
  id: string;
  name: string;
  amount: number;
  price: number;
};

type CartItemsArrayType = CartItemsType[];

export const CART_ITEMS: CartItemsArrayType = [
  { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
];
