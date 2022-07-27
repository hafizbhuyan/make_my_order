import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount = async () => {
		await AsyncStorage.multiGet(
			[
                'Favorite1', 'Favorite2', 'Favorite3', 'Favorite4', 'Favorite5'
            ]
		).then(async items => {
			if (items == undefined || items == null) {
				await AsyncStorage.multiSet([
					['Favorite1', ''],
					['Favorite2', ''],
					['Favorite3', ''],
					['Favorite4', ''],
					['Favorite5', '']
				])
			}
		})

		await AsyncStorage.multiGet(
			[
                'Recent1', 'Recent2', 'Recent3', 'Recent4', 'Recent5'
            ]
		).then(async items => {
			if (items[0][1] == undefined || items[0][1] == null) {
				await AsyncStorage.multiSet([
					['Recent1', ''],
					['Recent2', ''],
					['Recent3', ''],
					['Recent4', ''],
					['Recent5', '']
				])
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					<Pressable
						onPress={() => this.props.navigation.navigate('Favorites')}
						style={styles.iconButton}>
						<FontAwesome name={'star'} color={'#FBFEF9'} size={30} />
						<Text style={styles.iconText}>Favorites</Text>
					</Pressable>
					<Pressable
						onPress={() => this.props.navigation.navigate('Settings')}
						style={styles.iconButton}>
						<FontAwesome name={'gear'} color={'#FBFEF9'} size={30} />
						<Text style={styles.iconText}>Settings</Text>
					</Pressable>
					<Pressable
						onPress={() => this.props.navigation.navigate('Terms')}
						style={styles.iconButton}>
						<FontAwesome name={'question-circle'} color={'#FBFEF9'} size={30} />
						<Text style={styles.iconText}>Help</Text>
					</Pressable>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>Welcome to Make Your Order</Text>
					<Text style={styles.subTitle}>
						You're probably here cause you're hungry and too tired or drunk.{"\n"}
						What can we get you? {String.fromCodePoint(0x1F600)}
					</Text>
				</View>

				<View style={styles.buttonContainer}>
					<Pressable 
						style={styles.button}
						onPress={() => this.props.navigation.navigate('Cookout')}>
						<Text style={styles.buttonText}>Cookout</Text>
					</Pressable>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>
							Sheetz{'\n'}
							Coming Soon....
						</Text>
					</Pressable>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#000428',
		display: 'flex',
		flexDirection: 'column',
	},
	buttonContainer: {
		width: '100%',
		height: '65%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2%'
	},
	iconContainer: {
		width: '100%',
		height: '10%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textContainer: {
		width: '100%',
		height: '25%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2%'
	},

	button: {
		width: '75%',
		backgroundColor: '#000428',
		borderColor: '#FBFEF9',
		borderWidth: 2,
		marginTop: '5%',
		marginBottom: '5%',
		padding: '5%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20
	},
	buttonText: {
		fontSize: 18,
		color: '#FBFEF9',
		textAlign: 'center'
	},
	iconButton:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '5%',
		marginRight: '5%'
	},
	iconText: {
		fontSize: 15,
		color: '#FBFEF9',
		marginTop: '5%'
	},
	title: {
		fontSize: 25,
		color: '#FBFEF9',
		marginBottom: '10%',
		textAlign: 'center',
	},
	subTitle: {
		fontSize: 18,
		color: '#FBFEF9',
		textAlign: 'center',
	}
})