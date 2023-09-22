import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';


import { colors } from "./src/theme/colors.js";
import TabNav from './src/navigation/TabNav.js';
import { store } from "./src/redux/store.js";



export default function App() {

  const [ fontsLoaded ] = useFonts({
    Quicksand: require("./assets/Fonts/Quicksand-VariableFont_wght.ttf"),
    QuicksandSemiBold: require("./assets/Fonts/Quicksand-SemiBold.ttf")
  })

  if(!fontsLoaded){
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size={100} color={colors.verdeOscuro}  />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer style={styles.all}>
        <TabNav/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  all:{
    backgroundColor: colors.blanco,
  },
  indicator: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
