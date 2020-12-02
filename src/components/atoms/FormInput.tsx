import * as React from 'react';
import {View, TextInput, TextInputProps, Text} from 'react-native';

interface InputProps extends TextInputProps {
  onChangeInput(text: string): void;
  label?: string;
}

export const FormInput = <T extends unknown>({
  label,
  onChangeInput,
}: InputProps): React.ReactElement => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        style={{height: 40}}
        onChangeText={(input) => onChangeInput(input)}
        placeholder="Insert your text!"
      />
    </View>
  );
};
