import { FormEvent, useRef, useState } from 'react';
import classes from '../../assets/css/Cart/Checkout.module.css';
import {
  isFiveChars,
  isNotEmpty,
} from '../../helper/validation/inputValidation';

// ** types **
export type UserDataType = {
  name: string | undefined;
  street: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
};
type CheckoutPropsType = {
  onCancle: () => void;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (userData: UserDataType) => void;
};
type FormInputValidationType = {
  name: boolean;
  street: boolean;
  city: boolean;
  postalCode: boolean;
};
type ValidationMessagePropsType = {
  message: string;
  className?: string;
};
type ValidationMessagesType = {
  name: string;
  street: string;
  city: string;
  postalCode: string;
};

// ** Default Value**
const FormInputValidationInitialState: FormInputValidationType = {
  name: true,
  street: true,
  city: true,
  postalCode: true,
};

const ValidationMessages: ValidationMessagesType = {
  name: 'Please enter a valid name!',
  street: 'Please enter a valid street!',
  city: 'Please enter a valid city!',
  postalCode: 'Please enter a valid postal code (5 character long)!',
};

const ValidationMessage = (props: ValidationMessagePropsType) => {
  const { message, className } = props;
  const errorMessageClass = `text-[var(--color-errorPrimary)] ${className || ''}`;
  return <p className={errorMessageClass}>{message}</p>;
};

const Checkout = (props: CheckoutPropsType) => {
  const { onSubmit, onCancle } = props;
  // ** Ref **
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  // ** State **
  const [formInputsValidation, setFormInputsValidation] =
    useState<FormInputValidationType>(FormInputValidationInitialState);

  const confirmHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameInputRef.current?.value;
    const street = streetInputRef.current?.value;
    const postalCode = postalCodeInputRef.current?.value;
    const city = cityInputRef.current?.value;

    setFormInputsValidation((prev) => {
      return {
        ...prev,
        name: !!name && isNotEmpty(name),
        street: !!street && isNotEmpty(street),
        city: !!city && isNotEmpty(city),
        postalCode: !!postalCode && isFiveChars(postalCode),
      };
    });

    if (!formInputsValidation) {
      return;
    }
    onSubmit({
      name: name,
      street: street,
      postalCode: postalCode,
      city: city,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.controlParent}>
        <div
          className={`${classes.control} ${formInputsValidation.name ? '' : classes.invalid}`}
        >
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            autoComplete="new-password"
            ref={nameInputRef}
          />
          {!formInputsValidation.name && (
            <ValidationMessage message={ValidationMessages.name} />
          )}
        </div>
        <div
          className={`${classes.control} ${formInputsValidation.street ? '' : classes.invalid}`}
        >
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            autoComplete="new-password"
            ref={streetInputRef}
          />
          {!formInputsValidation.street && (
            <ValidationMessage message={ValidationMessages.street} />
          )}
        </div>
        <div
          className={`${classes.control} ${formInputsValidation.postalCode ? '' : classes.invalid}`}
        >
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            autoComplete="new-password"
            ref={postalCodeInputRef}
          />
          {!formInputsValidation.postalCode && (
            <ValidationMessage message={ValidationMessages.postalCode} />
          )}
        </div>
        <div
          className={`${classes.control} ${formInputsValidation.city ? '' : classes.invalid}`}
        >
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            autoComplete="new-password"
            ref={cityInputRef}
          />
          {!formInputsValidation.city && (
            <ValidationMessage message={ValidationMessages.city} />
          )}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancle}>
          Cancle
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
