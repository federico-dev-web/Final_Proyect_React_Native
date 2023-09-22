import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import Head from '../components/Head.js'
import Search from '../components/Search.js'
import ProductItem from '../components/ProductItem.js';
import { useState, useEffect } from 'react';

import { useSelector } from "react-redux";


const Products = ({ route, navigation }) => {
    
    const products = useSelector((state) => state.homeSlice.allProducts);

    const { category } = route.params

    let productCategory =  category ? products.filter( (el) => (el.category == category)) : products

    const [productsList, setProductsList] = useState( productCategory )
    const [filter, setFilter] = useState("")
    
    useEffect(
        () => {
            const filterProdList = productCategory.filter( (el) => el.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) )
            setProductsList(filterProdList)
        }, [filter]) 

    return (
    <SafeAreaView style={styles.container}>
        <Head title={category} text={"<- Regresar a Home"} navigation={navigation} />
        <Search filter={filter} setFilter={setFilter}  />
        <FlatList
            style={styles.list}
            data={productsList}
            keyExtractor={productsList.id}
            renderItem={ ({ item }) => ( <ProductItem item={item} navigation={navigation} /> ) }
        />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 250
    }
})

export default Products
