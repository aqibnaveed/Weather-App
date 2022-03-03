import GetLocation from 'react-native-get-location';

export const GetLocationOfDevice = async () => {
  try {
    return await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
    // console.log(location);
    // return location;
  } catch (error) {
    const {code, message: message_1} = error;
    console.warn(code, message_1);
  }
};
