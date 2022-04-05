import useLoadResource from 'hooks/useLoadResource';
import RootStackNavigator from 'navigation/RootStackNavigator';

const App: React.FC = () => {
  const isLoaded = useLoadResource();

  if (!isLoaded) return null;

  return <RootStackNavigator />;
};

export default App;
