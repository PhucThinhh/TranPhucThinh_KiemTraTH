import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ScreenOne({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A premium online store for sporter and their stylish choice</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/bike_main.png')} style={styles.image} />
      </View>
      <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScreenTwo')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFEFEF',
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 