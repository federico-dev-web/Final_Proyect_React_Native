import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from "../theme/colors.js";
import { Ionicons } from '@expo/vector-icons'; 

import { removeFromCart } from "../redux/slices/cartSlice.js";

import { useDispatch } from 'react-redux';

const fitNameLength = (text) => { 
    if (text.length > 12) {
        return `${text.slice(0,10)}...`
    }
    return text
}

const ItemCart = ( { item } ) => {

    const dispatch = useDispatch()

    const removeItem = (item) => { 
        dispatch(removeFromCart(item))
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.count}</Text>
            <Text style={styles.text}>x</Text>
            <Text style={styles.text}>{fitNameLength(item.title)}</Text>
            <Image 
                style={styles.image} 
                source={{ uri:  item.images[0] }}
            />
            <Pressable onPress={ () => removeItem(item) }>
                <Ionicons name="ios-trash-outline" size={24} color="black" />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 5,
        borderColor: colors.verdeOscuro,
        borderRadius: 10,
        borderBottomWidth: 2,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: '400',
        fontFamily: "Quicksand"
    },
    image: {
        height: 40,
        width: 55
    }
})

export default ItemCart