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
};

const Input = (props: InputProps) => {
  const { label, input } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
