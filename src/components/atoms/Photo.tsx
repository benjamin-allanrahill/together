import * as React from 'react';
import {View, Image} from 'react-native';

interface PhotoProps {
  uri: string;
}

const Photo = ({uri}: PhotoProps) => (
  <View>
    <Image
      source={{
        uri,
      }}
    />
  </View>
);

export default Photo;
