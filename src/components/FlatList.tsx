import { View, Text, StyleSheet, FlatList as List, Image } from 'react-native'
import React, { useState } from 'react'

export function FlatList() {
  const [ notice, setNotice ] = useState([
    { name: 'Jorge', id: '1' },
    { name: 'Mario', id: '2' },
    { name: 'Yoshi', id: '3' },
    { name: 'Luigi', id: '4' },
    { name: 'Bowser', id: '5' },
    { name: 'Toad', id: '6' },
  ])

  return (
    <View style={styles.list_container}>
      <View>
        <Text style={styles.title_text}>Git Branch Develop</Text>
      </View>

      <View style={styles.items_container}>
        <List
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={notice}
          renderItem={({ item }) => (
            <View style={styles.items_box}> 
              <View>
                <Image 
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
              </View>

              <View>
                <Text style={styles.items_text}>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  list_container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title_text: {
    width: '100%',
    marginTop: 48,
    fontSize: 20,
    fontWeight: 'bold',
  },

  items_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },  

  items_box: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginHorizontal: 10,
    padding: 28,
    borderWidth: 0.75,
    borderRadius: 8,
    borderColor: '#2d3440',
  },

  items_text: {
    fontSize: 16,
    marginTop: 12,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});