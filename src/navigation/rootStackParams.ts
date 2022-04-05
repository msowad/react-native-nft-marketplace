import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NFTItem } from 'appConstants';

export type RootStackParams = {
  Home: undefined;
  Details: {
    nft: NFTItem;
  };
};

export type RootStackProps<T extends keyof RootStackParams> = {
  navigation: NativeStackNavigationProp<RootStackParams, T>;
  route: RouteProp<RootStackParams, T>;
};
