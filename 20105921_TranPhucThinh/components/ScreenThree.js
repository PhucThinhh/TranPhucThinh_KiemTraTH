import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ScreenThree({ route }) {
  const { bike } = route.params;
  const discountedPrice = bike.price * 0.85; 

  return (
    <View style={styles.container}>
      <Image source={bike.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{bike.name}</Text>
        <Text style={styles.discountText}>15% OFF | ${bike.price}</Text>
        <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          It is a very important form of writing as we write almost everything in paragraphs, 
          be it an answer, essay, story, emails, etc.
        </Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.heartButton}>
            <Text>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: '#FDEDEC',
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discountText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: '#FF4D4D',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    marginBottom: 10,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heartButton: {
    padding: 10,
  },
  addToCartButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  addToCartText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
