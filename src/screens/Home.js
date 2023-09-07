import { StyleSheet, View } from 'react-native'
import Head from '../components/Head.js'
import Categories from '../components/Categories.js'
import { useState, useEffect } from 'react';

const Home = (setCategorySelected ) => {

    const [categoryFilter, setCategoryFilter] = useState("")

    const screenToCategory = (category) => { 
        setCategorySelected.setCategorySelected(category)
    }

    useEffect(() => {
        screenToCategory(categoryFilter)    
    }, [categoryFilter]) 


    return (
    <View style={styles.container}>
        <Head title={"Categorías"} text={"Elija una categoría"} />
        <Categories setCategoryFilter={setCategoryFilter} />
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginBottom: 350
    }
})


export default Home