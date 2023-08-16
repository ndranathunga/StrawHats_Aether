import * as React from 'react';
import { View, Text } from 'react-native';
import PersonalInfoForm from '../molecules/PersonalInfoForm';

const PersonalInfoContainer = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PersonalInfoForm />
        </View>
    );
}

export default PersonalInfoContainer;