import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: '#0038A8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
  }
});