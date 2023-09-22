import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

import Head from '../components/Head.js'
import ItemCart from '../components/ItemCart.js';
import { colors } from '../theme/colors.js'

import { useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector((state) => state.cartSlice.cartList);

    return (
    <View>
        <Head title="Carrito" />
        <View style={styles.button}>
            <Button
                title='Finalizar compra'
                onPress={()=> {console.log("nada")} }
            />
        </View>
        <Text style={styles.text}>
            Total: $ {cart ? ( cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0) ) : (0)} 
        </Text>
        <View style={styles.container}>
            {cart[0] ? (
                <FlatList
                    style={styles.list}
                    data={ [...cart] }
                    keyExtractor={ (key) => Math.random() }
                    renderItem={ ( { item } ) =>  ( <ItemCart item={ item } /> )  }
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.text}>No hay productos agregados</Text>
                </View>
            ) }
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20
    },
    container: {
        alignItems: 'center',
    },
    emptyContainer: {
        alignItems: 'center',
        height: 100
    },
    list: {
        borderColor: colors.verdeOscuro,
        borderRadius: 20,
        borderWidth: 2,
        width: "80%"
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 15
    }
})

export default Cart
