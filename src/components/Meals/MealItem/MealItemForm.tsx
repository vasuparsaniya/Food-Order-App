import classes from '../../../assets/css/Meals/MealItem/MealItemForm.module.css';
import Input from '../../UI/Input';

type MealItemFormProps = {
  id: string;
};

const MealItemForm = ({ id }: MealItemFormProps) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          id: 'amount_' + id,
          type: 'number',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
