import { useContext } from 'react';
import classes from '../../../assets/css/Meals/MealItem/MealItem.module.css';
import { AvailableMeal } from '../../../data/AvailableMeals';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';

type MealItemProps = {
  mealData: AvailableMeal;
};
const MealItem = ({ mealData }: MealItemProps) => {
  // ** use context
  const cartCtx = useContext(CartContext);

  const modifiedPrice = `$${mealData.price.toFixed(2)}`;

  const onAddToCartHandler = (quantity: number) => {
    cartCtx.addItem({
      id: mealData.id,
      name: mealData.name,
      price: mealData.price,
      quantity: quantity,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealData.name}</h3>
        <div className={classes.description}>{mealData.description}</div>
        <div className={classes.price}>{modifiedPrice}</div>
      </div>
      <div>
        <MealItemForm id={mealData.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
