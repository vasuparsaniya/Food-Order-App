import { FormEvent, useRef, useState } from 'react';
import classes from '../../../assets/css/Meals/MealItem/MealItemForm.module.css';
import Input from '../../UI/Input';

type MealItemFormProps = {
  id: string;
  // eslint-disable-next-line no-unused-vars
  onAddToCart: (quantity: number) => void;
};

const MealItemForm = ({ id, onAddToCart }: MealItemFormProps) => {
  // **  state
  const [quantityIsValid, setQuantityIsValid] = useState<boolean>(true);

  // ** use ref
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredQuantity: string = quantityInputRef.current
      ? quantityInputRef.current.value
      : '';

    if (
      enteredQuantity.trim().length === 0 ||
      +enteredQuantity < 1 ||
      +enteredQuantity > 5
    ) {
      setQuantityIsValid(false);
      return;
    }
    setQuantityIsValid(true);
    onAddToCart(+enteredQuantity);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        input={{
          step: '1',
          defaultValue: '1',
          id: 'quantity_' + id,
          type: 'number',
        }}
      />
      <button>+ Add</button>
      {!quantityIsValid && <p>Please enter a valid quantity (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
