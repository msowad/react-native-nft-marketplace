import { assets, COLORS, FONTS, SHADOWS, SIZES } from 'appConstants';
import { Image, Text, View } from 'react-native';

export const EthPrice: React.FC<{ price: number }> = ({ price }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image
        source={assets.eth as any}
        width={20}
        height={20}
        resizeMode='contain'
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.medium,
          marginLeft: SIZES.font,
        }}
      >
        {price}
      </Text>
    </View>
  );
};
export const NFTTitle: React.FC<{ title: string; subTitle: string }> = ({
  title,
  subTitle,
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};
export const SubInfo: React.FC = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};

const People: React.FC = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[assets.person01, assets.person02, assets.person04].map(
        (item, index) => (
          <ImageCmp key={index} imgUrl={item} index={index} />
        )
      )}
    </View>
  );
};

const ImageCmp: React.FC<{ imgUrl: string; index: number }> = ({
  imgUrl,
  index,
}) => {
  return (
    <Image
      source={imgUrl as any}
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

const EndDate: React.FC = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.font,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 40m
      </Text>
    </View>
  );
};
