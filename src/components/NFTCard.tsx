import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { assets, COLORS, NFTItem, SHADOWS, SIZES } from 'appConstants';
import { RootStackParams } from 'navigation/rootStackParams';
import { Image, View } from 'react-native';
import CircleButton from './CircleButton';
import RectButton from './RectButton';
import { EthPrice, NFTTitle, SubInfo } from './SubInfo';

interface Props {
  item: NFTItem;
}

const NFTCard: React.FC<Props> = ({ item }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={item.image as any}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          onPress={() => {}}
          imgUrl={assets.heart}
          top={10}
          right={10}
        />
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTitle title={item.name} subTitle={item.creator} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: SIZES.medium,
          }}
        >
          <EthPrice price={item.price} />
          <RectButton onPress={() => navigation.push('Details', { nft: item })}>
            Place a bid
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
