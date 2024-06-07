export interface InputProps {
  type: 'text' | 'email',
  value: string,
  onChange: (newValue: string) => void,
}