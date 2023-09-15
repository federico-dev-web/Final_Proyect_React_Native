import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home.js";
import Products from "../screens/Products.js";
import ProductDetail from "../screens/ProductDetail.js";

const RootNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
            <Stack.Screen component={Home} name={'home'}/>
            <Stack.Screen component={Products} name={'products'}/>
            <Stack.Screen component={ProductDetail} name={'productDetail'}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootNavigation