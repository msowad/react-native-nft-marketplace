import { COLORS, FONTS, SIZES } from 'appConstants';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
}

const RectButton: React.FC<Props> = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.small,
        borderRadius: SIZES.large,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          textAlign: 'center',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default RectButton;
