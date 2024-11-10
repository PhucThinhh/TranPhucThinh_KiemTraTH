import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './components/AdminScreen';
import ProductListScreen from './components/ScreenOne';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tạo Stack Navigator cho Admin
function AdminStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
    </Stack.Navigator>
  );
}

// Tạo Stack Navigator cho Products
function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductListScreen} />
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="AdminTab"  // Changed from "Admin" to "AdminTab"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'AdminTab') {
              iconName = focused ? 'user' : 'user-o';
            } else if (route.name === 'ProductsTab') {
              iconName = focused ? 'list' : 'list-alt';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="AdminTab" 
          component={AdminStack} 
          options={{ title: 'Admin' }} 
        />
        <Tab.Screen 
          name="ProductsTab" 
          component={ProductStack} 
          options={{ title: 'Products' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

