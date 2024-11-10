import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

export default function ScreenTwo({ navigation }) {
  const [bikes, setBikes] = useState([]);  // State to store bike data
  const [loading, setLoading] = useState(true);  // State to track loading

  // Fetch bikes from mock API
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch('https://6730222c66e42ceaf15f7586.mockapi.io/bike');
        const data = await response.json();
        setBikes(data);  // Set the bike data to the state
      } catch (error) {
        console.error('Error fetching bike data:', error);
      } finally {
        setLoading(false);  // Set loading to false after the data is fetched
      }
    };

    fetchBikes();
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF4D4D" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Roadbike</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Mountain</Text></TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {bikes.map((bike, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => navigation.navigate('ScreenThree', { bike })}
          >
            <Image source={{ uri: bike.image }} style={styles.bikeImage} />
            <Text style={styles.bikeName}>{bike.name}</Text>
            <Text style={styles.bikePrice}>${bike.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4D4D',
    marginVertical: 10,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  bikeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bikePrice: {
    color: '#FF4D4D',
    marginTop: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
});