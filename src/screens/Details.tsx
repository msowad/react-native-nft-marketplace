import { COLORS, FONTS, SIZES } from 'appConstants';
import {
  DetailsBid,
  DetailsHeader,
  FocusedStatusBar,
  RectButton,
} from 'components';
import DetailsDesc from 'components/DetailsDesc';
import { SubInfo } from 'components/SubInfo';
import { RootStackProps } from 'navigation/rootStackParams';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details: React.FC<RootStackProps<'Details'>> = ({
  navigation,
  route,
}) => {
  const { nft } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor='transparent' translucent={true} />

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}
      >
        <RectButton onPress={() => {}}>Place a bid</RectButton>
      </View>

      <FlatList
        data={nft.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader imageUrl={nft.image} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc nft={nft} />

              {nft.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
