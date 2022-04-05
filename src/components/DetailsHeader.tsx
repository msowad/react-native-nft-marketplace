import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { assets } from 'appConstants';
import { RootStackParams } from 'navigation/rootStackParams';
import { Image, StatusBar, View } from 'react-native';
import CircleButton from './CircleButton';

interface Props {
  imageUrl: string;
  navigation: NativeStackNavigationProp<RootStackParams, 'Details', undefined>;
}

const DetailsHeader: React.FC<Props> = ({ imageUrl, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={imageUrl as any}
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
      />

      <CircleButton
        imgUrl={assets.left}
        onPress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight}
      />

      <CircleButton
        imgUrl={assets.heart}
        onPress={() => {}}
        right={15}
        top={StatusBar.currentHeight}
      />
    </View>
  );
};

export default DetailsHeader;
