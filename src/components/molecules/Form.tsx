import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {FormInput} from '@atoms';
import {FormProps} from '_types';

export const Form = ({inputs, name, buttonText, onSubmitPress}: FormProps) => {
  return (
    <View>
      {name && <Text>{name}</Text>}
      {inputs.map((field) => (
        <FormInput {...field} />
      ))}
      <Button
        title={buttonText ? buttonText : 'Submit'}
        onPress={onSubmitPress}
      />
    </View>
  );
};
