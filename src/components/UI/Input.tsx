import { forwardRef } from 'react';
import classes from '../../assets/css/UI/Input.module.css';

type InputAttributesType = {
  id: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
};

type InputProps = {
  label: string;
  input: InputAttributesType;
  ref: React.MutableRefObject<number>;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, input } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
