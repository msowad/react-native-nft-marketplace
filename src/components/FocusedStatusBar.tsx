import { useIsFocused } from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'expo-status-bar';

const FocusedStatusBar: React.FC<StatusBarProps> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props}></StatusBar> : null;
};

export default FocusedStatusBar;
