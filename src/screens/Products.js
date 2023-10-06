import { StyleSheet, FlatList, SafeAreaView, View, ActivityIndicator } from 'react-native'
import Head from '../components/Head.js'
import Search from '../components/Search.js'
import ProductItem from '../components/ProductItem.js';
import { useState, useEffect } from 'react';
import { colors } from '../theme/colors.js';

import { useGetProductsQuery } from "../services/ecommerceApi.js";


const Products = ({ route, navigation }) => {

    const { category } = route.params
    
    const { data: products, 
        isLoading, 
        isError 
    } = useGetProductsQuery()

    const [productsList, setProductsList] = useState( [] )
    const [filter, setFilter] = useState("")

    useEffect(
        () => {
            if(isLoading){
                return
            }
            const filterProdList = productCategory.filter( (el) => el.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) )
            setProductsList(filterProdList)
        }, [filter, isLoading])  

    if(isLoading){
        return (
            <View style={styles.indicator}>
                <ActivityIndicator size={100} color={colors.verdeOscuro}  />
            </View>
        )
    }

    let productCategory =  category ? products.filter( (el) => (el.category == category)) : products

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
    },
    indicator: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})

export default Products
