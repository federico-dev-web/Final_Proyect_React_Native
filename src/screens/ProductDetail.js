import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import Head from '../components/Head.js'
import Carousel from '../components/Carousel.js'
import { colors } from '../theme/colors.js';


const ProductDetail = ({route, navigation}) => {
    
    const { item } = route.params

    return (
    <View>
        <Head title={item.title} text={`<- Regresar a ${item.category}`} navigation={navigation}/>
        <View style={styles.container} >
            <Carousel item={item}/>
            <Text style={styles.title} > {item.title} </Text>
            <Text style={styles.description} > {item.description} </Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating} > {item.rating} </Text>
                <AntDesign name="staro" size={24} color={colors.verdeOscuro} />
            </View>
            <Text style={styles.text} > $  {item.price} </Text>
        </View>
        <Button
            title='Agregar al carrito'
            onPress={()=>{console.log("funciona");}}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        padding: 5,
        fontSize: 25,
        fontFamily: "Quicksand",
    },
    description: {
        padding: 5,
        fontSize: 15,
        fontFamily: "Quicksand",
    },
    rating: {
        padding: 5,
        fontSize: 22,
        fontFamily: "Quicksand",
    },
    text: {
        padding: 5,
        fontSize: 20,
        fontFamily: "Quicksand"
    }
})

export default ProductDetail
