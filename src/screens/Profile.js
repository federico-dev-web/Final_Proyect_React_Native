import { StyleSheet, Text, SafeAreaView, View, Image, Pressable, FlatList } from 'react-native'
import Head from '../components/Head.js'
import { colors } from '../theme/colors.js'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import ItemCart from '../components/ItemCart.js';

import { useSelector } from 'react-redux';

const Profile = () => {

    const favourites = useSelector((state) => state.favouriteProductsSlice.favouriteProductList)

    return (
    <SafeAreaView>
        <Head title="Profile" />
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={{ uri:  "https://img.freepik.com/free-vector/set-people-avatars_52683-34418.jpg?w=740&t=st=1695252413~exp=1695253013~hmac=ef132e8e10d582e0c75966a505d66391221337c39d3353999499c3e02ad74082" }}
            />
            <Text style={styles.name}>Name</Text>
            <Text style={styles.address}>Address</Text>
            <Text style={styles.address}>e-mail</Text>
            <View style={styles.iconsContainer}>
                <Pressable onPress={()=>{console.log("camara");}}>
                    <AntDesign style={styles.icons} name="camerao" size={24} color="black" />
                </Pressable>
                <Pressable onPress={()=>{console.log("ubicacion");}}>
                    <Ionicons style={styles.icons} name="ios-location-outline" size={24} color="black" />
                </Pressable>
                <Pressable onPress={()=>{console.log("datos");}}>
                    <SimpleLineIcons style={styles.icons} name="notebook" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.favourites}>
                <Text style={styles.address}>Favourite products:</Text>
                {favourites[0] ? (
                <FlatList
                    style={styles.list}
                    data={ [...favourites] }
                    keyExtractor={ (key) => Math.random() }
                    renderItem={ ( { item } ) =>  ( <ItemCart item={ item } /> )  }
                />
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.text}>No hay productos favoritos</Text>
                    </View>
                    )
                }
            </View>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        margin: 20,
        height: 230,
        width: 230,
        borderRadius: 230,
        borderColor: colors.verdeOscuro,
        borderWidth: 2
    },
    name: {
        fontFamily: "QuicksandSemiBold",
        fontSize: 30,
        margin: 5
    },
    address: {
        fontFamily: "Quicksand",
        fontSize: 20,
        margin: 5
    },
    favourites: {
        borderColor: colors.verdeOscuro,
        borderRadius: 20,
        borderWidth: 2,
        width: "80%"
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    icons: {
        margin: 20
    },
    text: {
        alignSelf: 'center',
        margin: 20
    }
})

export default Profile
