import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';
import {Buttons, Typorgraphy} from 'styles';
interface ButtonProps {
  onPress: () => void;
  title: string;
}
export const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableHighlight style={styles.button} onPress={props.onPress}>
      <View>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    ...Buttons.baseRounded,
    borderColor: '#0197F6',
    borderWidth: 1.5,
  },
  buttonText: {
    ...Typorgraphy.body,
    color: '#0197F6',
  },
});
