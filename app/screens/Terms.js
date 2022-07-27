import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000428',
                padding: '2%'
            }}>
                <Text style={{
                    fontSize: 18,
                    color: '#FBFEF9',
                    textAlign: 'left'
                }}>
                    In the age of data and data breaches, here's how this app handles your data
                    {'\n\n'}
                    Your favorites and other things you save are stored on your device. This means if you delete
                    the app, it will delete all that data. We have no reason to save any data from this app on to
                    our database. This makes it easier for all of us. However, if we get enough interest for us to
                    use a database, we will definitely look into using one.
                </Text>

                <Text style={{
                    fontSize: 18,
                    color: '#FBFEF9',
                    textAlign: 'left'
                }}>
                    Need help? email us at support@drivense.com and we'll get back to you asap.
                </Text>
            </View>
        );
    }
}
