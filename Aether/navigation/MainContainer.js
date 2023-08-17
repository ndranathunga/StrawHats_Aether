import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../components/pages/HomeScreen';
import MyFlightsScreen from '../components/pages/MyFlightsScreen';
import ExploreScreen from '../components/pages/ExploreScreen';
import ProfileScreen from '../components/pages/ProfileScreen';
import PersonalInfoScreen from '../components/pages/PersonalInfoScreen';
import ChoosePod from '../components/pages/ChoosePod';

//Screen names
const homeName = "Home";
const FlightsName = "My Flights";
const ExploreName = "Explore";
const profileName = "Profile";
const personalInfoName = "Personal Info";
const choosePodName = "Choose Pod";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => (
    <Tab.Navigator
                initialRouteName={homeName}

                screenOptions={({ route }) => (

                    {
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === homeName) {
                                iconName = focused ? 'home' : 'home-outline';

                            } else if (rn === FlightsName) {
                                iconName = focused ? 'paper-plane' : 'paper-plane-outline';

                            } else if (rn === ExploreName) {
                                iconName = focused ? 'compass-sharp' : 'compass-outline';

                            } else if (rn === profileName) {
                                iconName = focused ? 'person' : 'person-outline';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },

                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "grey",
                        tabBarLabelStyle: {
                            paddingBottom: 10,
                            fontSize: 10
                        },
                        tabBarStyle: [
                            {
                                display: "flex"
                            },
                            null
                        ]
                    }
                )
                }>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={FlightsName} component={MyFlightsScreen} />
                <Tab.Screen name={ExploreName} component={ExploreScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />

            </Tab.Navigator>
  );


function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name={personalInfoName} component={PersonalInfoScreen} options={{ tabBarVisible: false }} />
      <Stack.Screen name={choosePodName} component={ChoosePod} options={{ tabBarVisible: false }} />
    </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;