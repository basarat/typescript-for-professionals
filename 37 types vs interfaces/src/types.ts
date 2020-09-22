type InputOnChange = (newValue: InputValue) => void;

type InputValue = string;

type InputType = 'text' | 'email';

export type InputProps = {
  type: InputType,
  value: InputValue,
  onChange: InputOnChange,
};