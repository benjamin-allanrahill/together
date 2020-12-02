import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {FormInput} from '@atoms';

interface Field {
  label?: string;
  onChangeInput(text: string): void;
}

interface FormProps {
  fields: Field[];
  name?: string;
  buttonText?: string;
  onSubmitPress(): void;
}

export const Form = ({fields, name, buttonText, onSubmitPress}: FormProps) => {
  return (
    <View>
      {name && <Text>{name}</Text>}
      {fields.map((field) => (
        <FormInput {...field} />
      ))}
      <Button
        title={buttonText ? buttonText : 'Submit'}
        onPress={onSubmitPress}
      />
    </View>
  );
};
