import { StyleSheet, Text, View, Pressable, Image, ActivityIndicator } from 'react-native'
import { colors } from "../theme/colors.js";

import { useGetProductsQuery } from "../services/ecommerceApi.js";
import { useState, useEffect } from "react";

const ItemCategory = ( {category, navigation} ) => {

    const { data: products, 
        isLoading, 
        isError, 
        error
    } = useGetProductsQuery()

    const [picToShow, setPicToShow] = useState(0)

    useEffect(() => {
        let loop = setInterval(() => {
            if (!imageList) {
                return
            }
            else if (imageList.length == (picToShow+1) ){
                setPicToShow(0)
                return
            } else {
                setPicToShow(picToShow+1)
                return
            }
        }, 2000);
        return () => {
            clearInterval(loop);
        };
    }, [isLoading, picToShow]); 


    if (isLoading ){
        return(            
        <View style={styles.indicator}>
            <ActivityIndicator size={100} color={colors.verdeOscuro}  />
        </View>)
    }

    let imageList = products.filter(el => el.category == category).map(el => el.images[0])

    return (
        <Pressable onPress={ () => navigation.navigate("products", {category: category} ) }>
            <View style={styles.container}>
                <Text style={styles.texto}>{category}</Text>
                <Image 
                    style={styles.image} 
                    source={{ uri:  imageList[picToShow] }}
                />
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        borderColor: colors.verdeClaro,
        borderWidth: 7,
        borderRadius: 20,
        marginTop: 25,
        width: "70%",
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.blanco,
        minWidth: "40%"
    },
    texto: {
        color: colors.verdeOscuro,
        fontSize: 20,
        fontFamily: "Quicksand",
        margin: 10
    },
    image: {
        margin: 10,
        height: 60,
        width: 80
    },
    indicator: {
        flex: 1,
        alignContent: 'center',
        marginTop: 250,
        justifyContent: 'center'
    }
})


export default ItemCategory