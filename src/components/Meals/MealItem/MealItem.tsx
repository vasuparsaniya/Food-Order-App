import classes from '../../../assets/css/Meals/MealItem/MealItem.module.css';
import { AvailableMeal } from '../../../data/AvailableMeals';
import MealItemForm from './MealItemForm';

type MealItemProps = {
  mealData: AvailableMeal;
};
const MealItem = ({ mealData }: MealItemProps) => {
  const modifiedPrice = `$${mealData.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealData.name}</h3>
        <div className={classes.description}>{mealData.description}</div>
        <div className={classes.price}>{modifiedPrice}</div>
      </div>
      <div>
        <MealItemForm id={mealData.id} />
      </div>
    </li>
  );
};

export default MealItem;
