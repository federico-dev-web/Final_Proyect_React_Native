import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from "../theme/colors";

const Header = ( {title, text, setCategorySelected} ) => {

    const goBackHome = () => { 
        if (text != "Elija una categoría"){
            setCategorySelected("")
        }
    }



    return (
    <View style={styles.container}>
        <Text style={styles.text} > {title} </Text>
        <Pressable onPress={() => goBackHome()}>
            <Text style={styles.link}>{text}</Text>
        </Pressable>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.verdeOscuro,  
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.verdeClaro,
        padding: 40
    },
    link: {
        fontSize: 20,
        color: "black",
        paddingBottom: 15
    }
})

export default Header