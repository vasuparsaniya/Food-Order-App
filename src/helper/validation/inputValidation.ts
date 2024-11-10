const isNotEmpty = (value: string) => value.trim() !== '';

const isFiveChars = (value: string) => value.trim().length === 5;

export { isNotEmpty, isFiveChars };
