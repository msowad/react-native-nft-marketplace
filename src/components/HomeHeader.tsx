import { assets, COLORS, FONTS, SIZES } from 'appConstants';
import { Image, Text, TextInput, View } from 'react-native';

interface Props {
  onSearch: (value: string) => void;
}
const HomeHeader: React.FC<Props> = ({ onSearch }) => {
  return (
    <View style={{ padding: SIZES.small }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={assets.logo as any}
          resizeMode='contain'
          style={{ width: 90, height: 25 }}
        />
        <View>
          <Image
            source={assets.person01 as any}
            resizeMode='contain'
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={assets.badge as any}
            resizeMode='contain'
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          />
        </View>
      </View>
      <View style={{ paddingVertical: SIZES.small }}>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.white,
          }}
        >
          Hello victoria 👋
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.bold,
            color: COLORS.white,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          borderRadius: SIZES.font,
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small,
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.search as any}
          style={{ width: 20, height: 20, marginRight: SIZES.small }}
        />
        <TextInput
          placeholder='Search NFTs'
          style={{ flex: 1, color: COLORS.primary, fontSize: SIZES.medium }}
          onChange={(e) => onSearch(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
