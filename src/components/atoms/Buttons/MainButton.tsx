import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';
import {Buttons, Typorgraphy} from 'styles';
interface ButtonProps {
  onPress: () => void;
  title: string;
}
export const MainButton: React.FC<ButtonProps> = (props) => {
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
    backgroundColor: '#D7263D',
    margin: 10,
  },
  buttonText: {
    ...Typorgraphy.body,
    color: '#F9F9F9',
  },
});
