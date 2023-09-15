import { StyleSheet } from 'react-native';
import { colors } from './src/theme/colors.js';
import { useState } from 'react';
import { useFonts } from 'expo-font';

import RootNavigation from "./src/navigation/RootNavigation.js";


export default function App() {
  
  const [categorySelected, setCategorySelected] = useState("")

  const [ fontsLoaded ] = useFonts({
    Quicksand: require("./assets/Fonts/Quicksand-VariableFont_wght.ttf"),
    QuicksandSemiBold: require("./assets/Fonts/Quicksand-SemiBold.ttf")
  })

  if(!fontsLoaded){
    return
  }



  return (
    <RootNavigation style={styles.all}/>
  );
}

const styles = StyleSheet.create({
  all:{
    backgroundColor: colors.blanco,
  }
});
