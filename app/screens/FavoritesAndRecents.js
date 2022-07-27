import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

export default class FavoritesAndRecents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recents: [],
            favorites: []
        }
    }

    componentDidMount = async () => {
        await AsyncStorage.multiGet(
            [
                'Favorite1', 'Favorite2', 'Favorite3', 'Favorite4', 'Favorite5'
            ]
        ).then(items => {
            items.forEach(item => this.setState({ favorites: [...this.state.favorites, item] }))
        })

        await AsyncStorage.multiGet(
            [
                'Recent1', 'Recent2', 'Recent3', 'Recent4', 'Recent5'
            ]
        ).then(items => {
            items.forEach(item => this.setState({ recents: [...this.state.recents, item] }))
        })
    }

    render() {
        const {
            favorites,
            recents
        } = this.state

        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 18,
                    color: '#FBFEF9',
                    textAlign: 'center'
                }}>
                    Your Favorite Orders
                </Text>
                <FlatList
                    contentContainerStyle={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                    style={{
                        width: '100%',
                        height: '50%'
                    }}
                    data={favorites}
                    renderItem={({item}) => (
                        <View style={styles.itemContainer}>
                            <Text
                                style={styles.itemText}
                            >
                                {item[1]}
                            </Text>
                        </View>
                    )}
                />

                <Text style={{
                    fontSize: 18,
                    color: '#FBFEF9',
                    textAlign: 'center'
                }}>
                    Your Recent Orders
                </Text>
                <FlatList
                    contentContainerStyle={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                    style={{
                        width: '100%',
                        height: '50%'
                    }}
                    data={recents}
                    renderItem={({item}) => (
                        <View style={styles.itemContainer}>
                            <Text
                                style={styles.itemText}
                            >
                                {item[1]}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000428',
    },
    itemContainer: {
        width: '90%',
        padding: '2%',
        marginTop: '2%',
        marginBottom: '2%'
    },
    itemText: {
        fontSize: 16,
        color: '#FBFEF9',
        textAlign: 'center',
        fontWeight: '800'
    }
})