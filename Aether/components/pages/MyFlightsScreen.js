import * as React from 'react';
import { View, Text } from 'react-native';

export default function MyFlightsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Choose Pod')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>My Flights Screen</Text>
        </View>
    );
}