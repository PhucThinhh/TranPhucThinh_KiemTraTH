import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function AdminScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = async () => {
    if (!name || !price || !image) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      const newProduct = {
        name,
        price: parseFloat(price),
        discount: parseFloat(discount),
        description,
        image,
      };

      await axios.post('https://6730222c66e42ceaf15f7586.mockapi.io/bike', newProduct);
      Alert.alert('Success', 'Product added successfully');
      
      // Reset form fields
      setName('');
      setPrice('');
      setDiscount('');
      setDescription('');
      setImage('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to add product');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="Discount (%)"
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7', // Màu nền nhẹ nhàng hơn
    justifyContent: 'center',  // Căn giữa các thành phần theo chiều dọc
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',  // Màu chữ đậm hơn
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',  // Màu viền nhạt hơn
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: '#fff',  // Màu nền trắng cho ô nhập liệu
    shadowColor: '#000',  // Bóng mờ cho ô nhập liệu
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: '#3366ff',  // Thay đổi màu nút thành xanh dương
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,  // Tạo khoảng cách giữa các chữ cái
  },
});
