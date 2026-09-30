/* ___ App entry ______________________________________
    Root of the app. Only providers and the first
    screen live here - navigation comes later.
   ____________________________________________________*/

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SearchScreen />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}