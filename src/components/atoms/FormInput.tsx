import * as React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Input} from '_types';

export const FormInput = <T extends unknown>({
  label,
  onChangeInput,
  type,
}: Input): React.ReactElement => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        style={{height: 40}}
        secureTextEntry={type === 'password' ? true : false}
        onChangeText={(input) => onChangeInput(input)}
        placeholder="Insert your text!"
      />
    </View>
  );
};
