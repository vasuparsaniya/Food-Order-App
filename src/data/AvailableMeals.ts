export type AvailableMeal = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type AvailableDummyMeals = AvailableMeal[];

export const AVAILABLE_DUMMY_MEALS: AvailableDummyMeals = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    quantity: 5,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    quantity: 5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    quantity: 5,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    quantity: 5,
  },
];
