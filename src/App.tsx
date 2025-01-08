import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Project01Cards from './components/Project01Cards';
import Project02PasswordGenerator from './components/Project02PasswordGenerator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "light";
  return (
   <SafeAreaView>
    {/* <Project01Cards/> */}
    <Project02PasswordGenerator/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
