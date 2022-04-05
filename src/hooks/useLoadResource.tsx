import { useFonts } from 'expo-font';

const useLoadResource = () => {
  const [loaded] = useFonts({
    InterBold: require('../assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('../assets/fonts/Inter-SemiBold.ttf'),
    InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('../assets/fonts/Inter-Medium.ttf'),
    InterLight: require('../assets/fonts/Inter-Light.ttf'),
  });

  return loaded;
};

export default useLoadResource;
