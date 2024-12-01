const isNotEmpty = (value: string | undefined): boolean =>
  !!value && value.trim() !== '';

const isFiveChars = (value: string | undefined): boolean =>
  !!value && value.trim().length === 5;

const checkFormValidation = (formData: { [x: string]: boolean }) => {
  return Object.values(formData).every(Boolean); //----default true
};
export { isNotEmpty, isFiveChars, checkFormValidation };
