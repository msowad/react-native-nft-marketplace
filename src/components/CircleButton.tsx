import { COLORS, SHADOWS, SIZES } from 'appConstants';
import { Image, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  imgUrl: string;
}

const CircleButton: React.FC<Props> = ({
  onPress,
  imgUrl,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        position: 'absolute',
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
      }}
      onPress={onPress}
    >
      <Image
        source={imgUrl as any}
        resizeMode='contain'
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;
