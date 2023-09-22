import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from "../theme/colors";

const Head = ( {title, text, navigation} ) => {

    const goBackButton = (title) => { 
        if(title == "Categorías"){
            return
        } else {
            navigation.goBack()
        }
    }

    return (
    <View style={styles.container}>
        <Text style={styles.text} > {title} </Text>
        <Pressable onPress={() => goBackButton(title) }>
            <Text style={styles.link}>{text}</Text>
        </Pressable>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.verdeOscuro,  
        alignItems: "center",
        fontFamily: "QuicksandSemiBold"
    },
    text: {
        fontSize: 27,
        color: colors.verdeClaro,
        padding: 20,
        fontFamily: "QuicksandSemiBold"
    },
    link: {
        fontSize: 20,
        color: "black",
        paddingBottom: 15,
        fontFamily: "Quicksand"
    }
})

export default Head