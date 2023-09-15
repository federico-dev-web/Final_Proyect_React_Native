import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from "../theme/colors.js";

const fitNameLength = (text) => { 
    if (text.length > 18) {
        return `${text.slice(0,16)}...`
    }
    return text
}

const ProductItem = ( {item, navigation} ) => {
    return (
            <View>
                <Pressable style={styles.container} onPress={ () => navigation.navigate("productDetail",{item: item})}>
                    <Text style={styles.text}>{fitNameLength(item.title)}</Text>
                    <Image 
                        style={styles.image} 
                        source={{ uri:  item.images[0] }}
                    />
                </Pressable>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.verdeOscuro,
        borderRadius: 10,
        borderWidth: 3,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: '400',
        fontFamily: "Quicksand"
    },
    image: {
        height: 60,
        width: 80
    }
})

export default ProductItem