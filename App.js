import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';


import { colors } from "./src/theme/colors.js";
import RootNavigation from "./src/navigation/RootNavigation.js";



export default function App() {
  
  const [categorySelected, setCategorySelected] = useState("")

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
    <RootNavigation style={styles.all}/>
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
