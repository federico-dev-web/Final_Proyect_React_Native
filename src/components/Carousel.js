import { Pressable, StyleSheet, Image, View } from 'react-native'
import { useState } from 'react'

const Carousel = ({item}) => {

    const [picToShow, setPicToShow] = useState(0)

    const changePic = () => {
        if (item.images.length == (picToShow+1) ){
            setPicToShow(0)
            return
        }   
        setPicToShow(picToShow+1)
    }
    return (
    <View>
        <Pressable onPress={ () => changePic() }>
        <Image 
                style={styles.image} 
                source={{ uri:  item.images[picToShow] }}
            />
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300
    }
})

export default Carousel
