import {TextInputProps} from 'react-native';
export interface Input extends TextInputProps {
  onChangeInput(text: string): void;
  label?: string;
  type: 'email' | 'password' | 'number' | 'text';
}
