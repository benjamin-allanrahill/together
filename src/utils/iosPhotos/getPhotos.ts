import CameraRoll from '@react-native-community/cameraroll';
export const getPhotosFromCRoll = async (): Promise<
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
