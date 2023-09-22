import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RootNavigation from "./RootNavigation.js";
import Profile from "../screens/Profile.js";
import Cart from "../screens/Cart.js";
import Notifications from "../screens/Notifications.js";

import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{ title: "", headerShown: false}} >
            <Tab.Screen 
                options={{
                    tabBarIcon: ( {focused} ) =>  focused ? <Entypo name="home" size={35} color="black" /> : <AntDesign name="home" size={20} color="black" /> 
                }}  
                name="RootNavigation" 
                component={RootNavigation}
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ( {focused} ) => focused ? <FontAwesome5 name="user-alt" size={35} color="black" /> : <FontAwesome5 name="user" size={20} color="black" />
                }}  
                name="Profile" 
                component={Profile}
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ( {focused} ) => focused ? <Ionicons name="ios-cart" size={35} color="black" /> : <Ionicons name="ios-cart-outline" size={20} color="black" />
                }}  
                name="Cart" 
                component={Cart}
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ( {focused} ) => focused ? <FontAwesome name="bell" size={35} color="black" /> : <FontAwesome name="bell-o" size={20} color="black" />
                }}  
                name="Notifications" 
                component={Notifications}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})

export default TabNav
