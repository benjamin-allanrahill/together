import {Input} from './InputProps';
export interface FormProps {
  inputs: Input[];
  name?: string;
  buttonText?: string;
  onSubmitPress(): void;
}
