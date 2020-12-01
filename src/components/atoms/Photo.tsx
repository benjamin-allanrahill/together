import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface PhotoProps {
  uri: string;
}

const Photo = ({uri}: PhotoProps) => (
  <View>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: uri,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Photo;
