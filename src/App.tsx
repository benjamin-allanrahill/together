/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, Button, Image} from 'react-native';
import {LoginForm, RegisterForm} from '@oranisms';
import CameraRoll from '@react-native-community/cameraroll';

const getPhotosFromCRoll = async (): Promise<
  CameraRoll.PhotoIdentifier[] | null
> => {
  try {
    const photosRef = await CameraRoll.getPhotos({
      first: 10,
    });
    const images = photosRef.edges;
    console.log(images);
    return images;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const App = () => {
  const [images, setImages] = useState<CameraRoll.PhotoIdentifier[] | null>(
    null,
  );
  return (
    <SafeAreaView>
      <RegisterForm />
      <LoginForm />
      <Button
        title="Photos"
        onPress={async () => setImages(await getPhotosFromCRoll())}
      />
      {images?.map((image) => (
        <>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={{uri: image.node.image.uri}}
          />
          <Text>{new Date(image.node.timestamp * 1000).toDateString()}</Text>
        </>
      ))}
    </SafeAreaView>
  );
};

export default App;
