import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from "../theme/colors.js";

const ItemCategory = ( {category, navigation} ) => {
    return (
        <Pressable onPress={ () => navigation.navigate("products", {category: category,} ) }>
            <View style={styles.container}>
                <Text style={styles.texto}>{category}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        borderColor: colors.ocre,
        borderWidth: 7,
        borderRadius: 20,
        margin: 5,
        padding: 5,
        width: "80%",
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.piel
    },
    texto: {
        color: colors.verdeOscuro,
        fontSize: 20,
        fontFamily: "Quicksand"
    }
})


export default ItemCategory