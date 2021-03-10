import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.carContainer}>
        <View style={style.title}>
          <text>
            Model S
          </text>
          <text>Starting at $69,400</text>
        </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:"100px",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer:{

  }
  
});