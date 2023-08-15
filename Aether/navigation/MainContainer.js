import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../pages/HomeScreen';
import MyFlightsScreen from '../pages/MyFlightsScreen';
import ExploreScreen from '../pages/ExploreScreen';
import ProfileScreen from '../pages/ProfileScreen';

//Screen names
const homeName = "Home";
const FlightsName = "My Flights";
const ExploreName = "Explore";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === FlightsName) {
                            iconName = focused ? 'paper-plane' : 'paper-plane-outline';

                        } else if (rn === ExploreName) {
                            iconName = focused ? 'settings' : 'settings-outline';

                        } else if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={FlightsName} component={MyFlightsScreen} />
                <Tab.Screen name={ExploreName} component={ExploreScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;