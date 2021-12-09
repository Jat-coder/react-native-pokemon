import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';
import SearchScreen from './SearchScreen/searchScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <SearchScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1
  },
});
