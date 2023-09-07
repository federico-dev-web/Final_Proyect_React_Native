import { StyleSheet, View, FlatList } from 'react-native'
import Head from '../components/Head.js'
import Search from '../components/Search.js'
import { products } from "../data/products.js";
import ProductItem from '../components/ProductItem.js';
import { useState, useEffect } from 'react';

const Products = ( {setCategorySelected, category} ) => {

    let productCategory =  category ? products.filter( (el) => (el.category == category)) : products

    const [productsList, setProductsList] = useState( productCategory )
    const [filter, setFilter] = useState("")

    useEffect(
        () => {
            const filterProdList = productCategory.filter( (el) => el.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) )
            setProductsList(filterProdList)
        }, 
        [filter])
    

    return (
    <View style={styles.container}>
        <Head title={category} text={"<- Regresar al Home"} setCategorySelected={setCategorySelected} />
        <Search filter={filter} setFilter={setFilter}  />
        <FlatList
        data={productsList}
        keyExtractor={products.id}
        renderItem={ ({ item }) => <ProductItem item={item} /> }
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 415
    }
})

export default Products
