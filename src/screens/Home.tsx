import { COLORS, NFTData, NFTItem } from 'appConstants';
import { FocusedStatusBar, HomeHeader, NFTCard } from 'components';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home: React.FC = () => {
  const [data, setData] = useState<NFTItem[]>(NFTData);

  const handleSearch = (value: string) => {
    if (!value.length) return setData(NFTData);
    const filteredData = NFTData.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    if (filteredData.length) return setData(filteredData);
    setData(NFTData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} style='light' />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <NFTCard item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader onSearch={(value) => handleSearch(value)} />
            }
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
