import { View, StyleSheet } from 'react-native';
import Home from "./src/screens/Home.js";
import Products from "./src/screens/Products.js";
import { colors } from './src/theme/colors.js';
import { useState, useEffect } from 'react';


export default function App() {

  const [categorySelected, setCategorySelected] = useState("")


  return (
    <View style={styles.all}>
      {
        categorySelected ? < Products setCategorySelected={setCategorySelected} category={categorySelected} /> : 
        < Home setCategorySelected={setCategorySelected} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  all:{
    backgroundColor: colors.blanco,
  }
});
