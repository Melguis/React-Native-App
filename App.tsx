import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from './src/components/Header'
import { FlatList } from './src/components/FlatList'

export default function App() {
  return (
    <>
      <View style={styles.header_container}>
        <Header />
      </View>
      
      <FlatList />
      <StatusBar style="light" backgroundColor="#0038A8" />
    </>
  );
}

const styles = StyleSheet.create({
  header_container: {
    width: '100%',
    height: '15%',
    backgroundColor: '#0038A8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});