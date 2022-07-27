import { Text, StyleSheet, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads'
import FavoritesAndRecents from './FavoritesAndRecents'

export default class Cookout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: '',
            showMainButton: true,
            favorites: [],
            recents: []
        }
        this.adUnitId = 'ca-app-pub-3940256099942544/6300978111'
        this.trayChoices = ['Jr Tray', 'Tray']
        this.jrTrayOptions = [
            'SM. Burger',
            '2 Chicken Strips',
            '2 Corn Dogs',
            'BLT Sandwich',
            '1 Hot Dog',
            '1 Quesadilla'
        ]
        this.trayOptions = [
            'Big Double Burger',
            'Regular 1/4 LB Burger',
            'Regular Barbeque',
            '2 Hot Dogs',
            '2 Quesadilla',
            'Regular Chicken',
            'Cajun Chicken',
            'Spicy Chicken',
            'BBQ Chicken',
            'Chicken Strips'
        ]
        this.sideOptions = [
            'Bacon Wrap',
            'Cheese Bites',
            'Chicken Nuggets',
            'Chicken Wrap',
            'Corn Dog',
            'Fries',
            'Hushpuppes',
            'Onion Rings',
            'Quesadilla',
            'Slaw',
            'Chili'
        ]
        this.drinkOptions = [
            'Large Drink',
            'Huge Tea',
            'Dasani 20 Oz',
            'Cheerwine Float',
            'Coke Float',
            'Regular Shake'
        ]
        this.milkShakeOptions = [
            'Fresh Banana',
            'Banana Berry',
            'Banana Fudge',
            'Banana Nut',
            'Banana Pineapple',
            'Banana Pudding',
            'Blueberry',
            'Butterfinger',
            'Cappuccino',
            'Caramel',
            'Caramel Fudge',
            'Blueberry Cheesecake',
            'Caramel Cheesecake',
            'Cherry Cheesecake',
            'Chocolate Chip Cheesecake',
            'Strawberry Cheesecake',
            'Hersheys Chocolate',
            'Double Chocolate',
            'Chocolate Cherry',
            'Chocolate Chip Cherry',
            'Chocolate Chip Mint',
            'Chocolate Malt',
            'Chocolate Nut',
            'Health Toffee',
            'M&M',
            'Mocha',
            'Orange Push-Up',
            'Oreo',
            'Oreo Mint',
            'Peach',
            'Peach Cobbler',
            'Peanut Butter',
            'Peanut Butter Banana',
            'Peanut Butter Fudge',
            'Pineapple',
            'Red Cherry',
            'Reeses Cup',
            'Snickers',
            'Strawberry',
            'Vanilla',
            'Walnut'
        ]
        this.nonTrayOptions = [
            'Hamburger',
            'Char Grilled Chicken Breast',
            'Crispy Spicy Chicken',
            'Chicken Strips',
            'Crispy Chicken Wraps',
            'BBQ'
        ]
        this.hamburgerOptions = [
            'Cookout Style',
            'Cheddar Style',
            'Out West Style',
            'Steak Style',   
        ]
        this.hamburgerSizeOptions = [
            'Small',
            'Regular',
            'Huge',
            'Big Double'
        ]
        this.hamburgerToppingOptions = [
            'Mayo',
            'Mustard',
            'Ketchup',
            'Pickles',
            'Onions',
            'Lettuce',
            'Grilled Onions',
            'Cajun Seasoning'
        ]
        this.hamburgerExtraOptions = [
            'Tomato',
            'Bacon',
            'Cheese',
            'Chili',
            'Slaw'
        ]
        this.charGrilledChickenBreast = [
            'Original Style',
            'Barbeque Style',
            'Cajun Style',
            'Club Style',
            'Cheddar Style',
            'Homemade Style',
        ]
        this.crispySpicyChicken = 'Crispy Spicy Chicken Breast Fillet'
        this.chickenStripOptions = [
            'Chicken Strip Snack',
            'Chicken Strip Sandwich',
            'Chicken Strip Club'
        ]
        this.crispyChickenWraps = [
            'Cajun Wrap',
            'Honey Mustard',
            'Ranch Wrap',
            'Cajun Ranch'
        ]
        this.bbqOptions = [
            'BBQ Sandwich',
            'BBQ Plate',
            'Chicken Nuggets',
            'Hot Dog',
            'Corn Dog',
            'Hushpuppies',
            'Cheese Quesadilla',
            'Quesadilla',
            'BLT Sandwich',
            'Bacon Ranch Wrap',
            'Chili Dog',
            'Cajun Fries',
            'Chicken Quesadilla',
            'Regular Fries',
            'Large Fries',
            'Fries',
            'Cheese Fries',
            'Bacon Cheddar Dog',
            'Cookout Style Hot Dog',
            'Onion Rings',
            'White Cheddar Cheese Bites'
        ]
        this.floatOptions = [
            'Coke Float',
            'Cheerwine Float'
        ]
        this.drinks = [
            'Tea',
            'Coke',
            'Sprite',
            'Dr. Pepper',
            'Cheerwine',
            'Water'
        ]
        this.orderOptions = [
            'Tray', 'Not Tray'
        ]
    }

    MakeOrder = () => {
        let fullOrder = []
        const stepOne = this.orderOptions[Math.floor(Math.random() * this.orderOptions.length)]

        // orders for trays
        if (stepOne == 'Tray') {
            const stepTwo = this.trayChoices[Math.floor(Math.random() * this.trayChoices.length)]

            if (stepTwo == 'Jr Tray') {
                const stepThree = this.jrTrayOptions[Math.floor(Math.random() * this.jrTrayOptions.length)]
                const stepFour = this.sideOptions[Math.floor(Math.random() * this.sideOptions.length)]
                const stepSix = this.sideOptions[Math.floor(Math.random() * this.sideOptions.length)]
                const stepFive = this.drinkOptions[Math.floor(Math.random() * this.drinkOptions.length)]
                this.setState({ order: `Your order: ${stepTwo} ${stepThree} with ${stepFour}, ${stepSix} and ${stepFive}` })

            } else if (stepTwo == 'Tray') {
                const stepThree = this.trayOptions[Math.floor(Math.random() * this.trayOptions.length)]
                const stepFour = this.sideOptions[Math.floor(Math.random() * this.sideOptions.length)]
                const stepSix = this.sideOptions[Math.floor(Math.random() * this.sideOptions.length)]
                const stepFive = this.drinkOptions[Math.floor(Math.random() * this.drinkOptions.length)]
                this.setState({ order: `Your order: ${stepTwo} ${stepThree} with ${stepFour}, ${stepSix} and ${stepFive}` })
            }

        }
        else if (stepOne == 'Not Tray') {
            const stepTwo = this.nonTrayOptions[Math.floor(Math.random() * this.nonTrayOptions.length)]

            if (stepTwo == 'Hamburger') {
                const stepThree = this.hamburgerSizeOptions[Math.floor(Math.random() * this.hamburgerSizeOptions.length)]
                const stepFour = this.hamburgerOptions[Math.floor(Math.random() * this.hamburgerOptions.length)]
                const stepFive = this.hamburgerToppingOptions[Math.floor(Math.random() * this.hamburgerToppingOptions.length)]
                const stepSix = this.hamburgerExtraOptions[Math.floor(Math.random() * this.hamburgerExtraOptions.length)]
                const stepSeven = this.drinks[Math.floor(Math.random() * this.drinks.length)]
                this.setState({ order: `Your order: ${stepThree} ${stepFour} ${stepTwo} with ${stepFive}, ${stepSix} and a ${stepSeven}` })
            }

            else if (stepTwo == 'BBQ') {
                const stepThree = this.bbqOptions[Math.floor(Math.random() * this.bbqOptions.length)]
                const stepFour = this.drinks[Math.floor(Math.random() * this.drinks.length)]
                this.setState({ order: `Your order: ${stepThree} with a ${stepFour}` })                
            }

            else if (stepTwo == 'Char Grilled Chicken Breast') {
                const stepThree = this.charGrilledChickenBreast[Math.floor(Math.random() * this.charGrilledChickenBreast.length)]
                const stepFour = this.drinks[Math.floor(Math.random() * this.drinks.length)]
                this.setState({ order: `Your order: ${stepThree} ${stepTwo} with a ${stepFour}` })
            }

            else if (stepTwo == 'Crispy Spicy Chicken') {
                const stepThree = this.drinks[Math.floor(Math.random() * this.drinks.length)]
                this.setState({ order: `Your order: ${stepTwo} with a ${stepThree}` })
            }

            else if (stepTwo == 'Chicken Strips') {
                const stepThree = this.chickenStripOptions[Math.floor(Math.random() * this.chickenStripOptions.length)]
                const stepFour = this.drinks[Math.floor(Math.random() * this.drinks.length)]
                this.setState({ order: `Your order: ${stepThree} with a ${stepFour}` })
            }

            else if (stepTwo == 'Crispy Chicken Wraps') {
                const stepThree = this.crispyChickenWraps[Math.floor(Math.random() * this.crispyChickenWraps.length)]
                const stepFour = this.drinks[Math.floor(Math.random() * this.drinks.length)]
                this.setState({ order: `Your order: ${stepThree} with a ${stepFour}` })
            }
        }
    }

    AddExtras = (choice) => {
        if (choice == 'Milkshake') {
            const pickAMilkShake = this.milkShakeOptions[Math.floor(Math.random() * this.milkShakeOptions.length)]
            this.setState({ order: `${this.state.order} and a ${pickAMilkShake}` })
        } else if (choice == 'Cheesecake') {
            this.setState({ order: `${this.state.order} and a Cheesecake` })
        } else if (choice == 'Float') {
            const float = this.floatOptions[Math.floor(Math.random() * this.floatOptions.length)]
            this.setState({ order: `${this.state.order} and a ${float}` })
        }
    }

    HandleFavorites = async (itemToAdd) => {
        await AsyncStorage.multiGet(
            [
                'Favorite1', 'Favorite2', 'Favorite3', 'Favorite4', 'Favorite5'
            ]
        ).then(async items => {
            const emptyFavorites = items.filter(item => item[1].length == 0)
            emptyFavorites[0][1] = itemToAdd

            await AsyncStorage.multiSet([
                [items[0][0], items[0][1]],
                [items[1][0], items[1][1]],
                [items[2][0], items[2][1]],
                [items[3][0], items[3][1]],
                [items[4][0], items[4][1]],
            ])
        })
    }

    HandleRecents = async () => {
        await AsyncStorage.multiGet(
            [
                'Recent1', 'Recent2', 'Recent3', 'Recent4', 'Recent5'
            ]
        ).then(async items => {
            const emptyRecents = items.filter(item => item[1].length == 0)
            emptyRecents[0][1] = this.state.order

            await AsyncStorage.multiSet([
                [items[0][0], items[0][1]],
                [items[1][0], items[1][1]],
                [items[2][0], items[2][1]],
                [items[3][0], items[3][1]],
                [items[4][0], items[4][1]],
            ])
        })        
    }

    render() {
        const {
            order,
            showMainButton
        } = this.state

        return (
            <View style={styles.container}>
                <View style={{
                    width: '100%',
                    height: '75%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 25,
                        color: '#FBFEF9',
                        fontWeight: '600',
                        textAlign: 'center',
                        bottom: '10%'
                    }}>
                        Cookout
                    </Text>
                    <Pressable 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Favorites")}>
                        <Text style={styles.buttonText}>Favorites</Text>
                    </Pressable>
                    <Pressable 
                        style={(showMainButton == true) ? styles.button : { display: 'none' } }
                        onPress={() => {
                            this.setState({ showMainButton: false })
                            this.MakeOrder()
                            this.HandleRecents()
                        }}>
                        <Text style={styles.buttonText}>Make your order!</Text>
                    </Pressable>
                    <Pressable 
                        style={(showMainButton == false) ? styles.button : { display: 'none' } }
                        onPress={() => {
                            this.MakeOrder()
                            this.HandleRecents()
                        }}>
                        <Text style={styles.buttonText}>Don't like? Try again!</Text>
                    </Pressable>
                    <Text style={styles.order}>
                        {order}
                    </Text>
                </View>
                <View style={{
                    width: '100%',
                    height: '15%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '5%'
                }}>
                    <Pressable
                        onPress={() => this.HandleFavorites(order)}
                        style={(showMainButton == false) ? styles.subButton : { display: 'none' }}
                        >
                        <Text style={styles.subButtonText}>
                            Add to Favorites
                        </Text>
                    </Pressable>
                    <Pressable 
                        style={(showMainButton == false) ? styles.subButton : { display: 'none' }}
                        onPress={() => {
                            this.AddExtras('Milkshake')
                        }}>
                        <Text style={styles.subButtonText}>Add Milkshake?</Text>
                    </Pressable>
                    <Pressable 
                        style={(showMainButton == false) ? styles.subButton : { display: 'none' }}
                        onPress={() => {
                            this.AddExtras('Cheesecake')
                        }}>
                        <Text style={styles.subButtonText}>Add Cheesecake?</Text>
                    </Pressable>
                    <Pressable 
                        style={(showMainButton == false) ? styles.subButton : { display: 'none' }}
                        onPress={() => {
                            this.AddExtras('Float')
                        }}>
                        <Text style={styles.subButtonText}>Add Float?</Text>
                    </Pressable>
                </View>

                <View style={{
                    width: '100%',
                    height: '10%',
                }}>
                    <BannerAd
                        unitId={this.adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: false
                        }}
                    />
                </View>
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
        backgroundColor: '#000428'
    },
    button: {
        width: '90%',
        height: '10%',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#FBFEF9',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FBFEF9',
        fontWeight: 'bold'
    },
    order: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FBFEF9',
        top: '5%'
    },
    subButton: {
        width: '45%',
        padding: '2%',
        backgroundColor: '#000428',
        borderWidth: 2,
        borderColor: '#FBFEF9',
        borderRadius: 20,
        margin: '2%'
    },
    subButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FBFEF9',
        fontWeight: '500'
    }
})