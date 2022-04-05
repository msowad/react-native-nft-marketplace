import { COLORS, FONTS, NFTItem, SIZES } from 'appConstants';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { EthPrice, NFTTitle } from './SubInfo';

interface Props {
  nft: NFTItem;
}

const DetailsDesc: React.FC<Props> = ({ nft }) => {
  const [text, setText] = useState(nft.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitle title={nft.name} subTitle={nft.creator} />

        <EthPrice price={nft.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && '...'}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(nft.description);
                  setReadMore(true);
                } else {
                  setText(nft.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
