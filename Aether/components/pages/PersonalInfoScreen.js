import * as React from 'react';
import { View, Text } from 'react-native';
import PersonalInfoContainer from '../organisms/PersonalInfoContainer';

export default function PersonalInfoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PersonalInfoContainer />
        </View>
    );
}