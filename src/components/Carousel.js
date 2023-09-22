import { Pressable, StyleSheet, View, ImageBackground } from 'react-native'
import { useState } from 'react'
import { colors } from "../theme/colors.js";
import { AntDesign } from '@expo/vector-icons'; 

const Carousel = ({item}) => {

    const [picToShow, setPicToShow] = useState(0)

    const changePicBack = () => {
        if (picToShow == 0 ){
            setPicToShow(item.images.length-1)
            return
        }   
        setPicToShow(picToShow-1)
    }

    const changePicFoward = () => {
        if (item.images.length == (picToShow+1) ){
            setPicToShow(0)
            return
        }   
        setPicToShow(picToShow+1)
    }
    return (
        <View>
                <ImageBackground style={styles.image} source={{ uri:  item.images[picToShow] }}>
                    <Pressable style={styles.button} onPress={ () => changePicBack() }>
                        <AntDesign name="leftcircleo" size={24} color={colors.verdeOscuro} />
                    </Pressable>
                    <Pressable style={styles.button} onPress={ () => changePicFoward() }>
                        <AntDesign name="rightcircleo" size={24} color={colors.verdeOscuro} />
                    </Pressable>
                </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        padding: 10,
        opacity: 0.6
    }
})

export default Carousel
