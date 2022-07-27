import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Welcome from './app/screens/Welcome';
import Cookout from './app/screens/Cookout';
import Terms from './app/screens/Terms';
import FavoritesAndRecents from './app/screens/FavoritesAndRecents';
import Settings from './app/screens/Settings';

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName={"Welcome"}
				screenOptions={{
					headerStyle:{backgroundColor: '#000428'},
					headerTintColor:"#FBFEF9"
				}}
			>
				<Stack.Screen name={"Welcome"} component={Welcome} />
				<Stack.Screen name={"Cookout"} component={Cookout} />
				<Stack.Screen name={"Favorites"} component={FavoritesAndRecents} />
				<Stack.Screen name={"Terms"} component={Terms} />
				<Stack.Screen name={"Settings"} component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}