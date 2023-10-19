import { StyleSheet, Text, SafeAreaView, View, Image, Pressable, FlatList, Modal } from 'react-native'
import Head from '../components/Head.js'
import MapaLoc from '../components/MapLoc.js';
import { colors } from '../theme/colors.js'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import ItemFavourite from '../components/ItemFavourite.js';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import { useGetImageQuery, usePutImageMutation, useGetLocationQuery, usePutLocationMutation } from "../services/ecommerceApi.js"
import { setCameraImage, clearUser } from '../redux/slices/authSlice.js'

import { useDispatch } from "react-redux"

import AsyncStorage from '@react-native-async-storage/async-storage'


const Profile = () => {
    const dispatch = useDispatch()

    const [putImage, result] = usePutImageMutation();
    
    //estado de ubicacion
    const [location, setLocation] = useState(null);
    //estado de direccion 
    const [address, setAdress] = useState(null);
    const [addressToShow, setAddressToShow] = useState(null);

    //estado de imagen a mostrar
    const [image, setImage] = useState(null)
    //estado de modal que permite elegir la camara o la galeria
    const [modalVisible, setModalVisible] = useState(false);
    const [mapModalVisible, setMapModalVisible] = useState(false);
    //modal de cierre de session
    const [sessionLogOutModal, setSessionLogOutModal] = useState(false);
    
    //trae el usuario del slice
    const user = useSelector(state => state.authSlice.user);

    //carga la imagen si tiene guardada el usuario en la base de datos

    const { data, isLoading, error, isError, refetch } = useGetImageQuery(user.replace(/[^a-zA-Z0-9]/g,'-'));

    //para actualizar la imagen visible en el profile
    useEffect(() => {
        data ? setImage(data.image) : setImage("https://img.freepik.com/free-vector/set-people-avatars_52683-34418.jpg?w=740&t=st=1695252413~exp=1695253013~hmac=ef132e8e10d582e0c75966a505d66391221337c39d3353999499c3e02ad74082")
    }, [isLoading])

    const getAdress = async () => {
        let regionName = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
        return regionName
    }

    //para actualizar la direccion visible en el profile
    useEffect(() => {
        location && setAdress(getAdress())
        address && setAddressToShow(address._j[0].city+", "+address._j[0].country)
    }, [mapModalVisible])

    //slice de listado de favoritos para mostrar en el perfil
    const favourites = useSelector((state) => state.favouriteProductsSlice.favouriteProductList)

    const openCamera = async (user) => {
        const permissionResult = await ImagePicker.getCameraPermissionsAsync()
        if ( permissionResult.granted === false ) {
            const requestPermissionResult = await ImagePicker.requestCameraPermissionsAsync()
            if (requestPermissionResult.granted === false) {
                alert("no se otorgaron permisos para la camara")
                return
            }
        } 
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true
        })
        if (!result.canceled) {
            setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            setModalVisible(!modalVisible)
            dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            if (!result.canceled) {
                await putImage({
                    image: `data:image/jpeg;base64,${result.assets[0].base64}`,
                    user: `${user}`
                });
                refetch();
            }
        }
    }

    const pickImage = async (user) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true
        })
        if (!result.canceled) {
            setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            setModalVisible(!modalVisible)
            dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            if (!result.canceled) {
                await putImage({
                    image: `data:image/jpeg;base64,${result.assets[0].base64}`,
                    user: `${user}`
                });
                refetch();
            }
        }
    }

    const openLocation = async (user) => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            alert("no se otorgaron permisos para la ubicación");
            return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setMapModalVisible(!mapModalVisible);
    }

    const logOut = async () => { 
        await AsyncStorage.removeItem("savedSession")
        dispatch(clearUser())
    }


    return (
    <SafeAreaView>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalIconContainer}>
                        <Pressable onPress={() => pickImage(user.replace(/[^a-zA-Z0-9]/g,'-'))}>
                            <AntDesign style={styles.modalIcon} name="picture" size={50} color="black" />
                        </Pressable>
                        <Pressable onPress={() => openCamera(user.replace(/[^a-zA-Z0-9]/g,'-'))}>
                            <AntDesign style={styles.modalIcon} name="camerao" size={50} color="black" />
                        </Pressable>
                    </View>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Regresar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Modal
        animationType="slide"
        transparent={true}
        visible={mapModalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setMapModalVisible(!mapModalVisible);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MapaLoc location={location}/>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setMapModalVisible(!mapModalVisible)}>
                        <Text style={styles.textStyle}>Regresar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Modal
        animationType="slide"
        transparent={true}
        visible={sessionLogOutModal}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setSessionLogOutModal(!sessionLogOutModal);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>¿Estas seguro que deseas cerrar sesion?</Text>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {logOut(); setSessionLogOutModal(!sessionLogOutModal)}}>
                        <Text style={styles.textStyle}>Log Out</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {setSessionLogOutModal(!sessionLogOutModal)}}>
                        <Text style={styles.textStyle}>Regresar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Head title="Tu Perfíl" />
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={{ uri:  image }}
            />
            <Text style={styles.name}>{user ? user : 'Email'}</Text>
            <Text style={styles.address}>{addressToShow?addressToShow:"Tu dirección"}</Text>
            <View style={styles.iconsContainer}>
                <Pressable onPress={()=>{setModalVisible(!modalVisible)}}>
                    <AntDesign style={styles.icons} name="camerao" size={24} color="black" />
                </Pressable>
                <Pressable onPress={()=>{openLocation(user.replace(/[^a-zA-Z0-9]/g,'-'))}}>
                    <Ionicons style={styles.icons} name="ios-location-outline" size={24} color="black" />
                </Pressable>
                <Pressable onPress={()=>setSessionLogOutModal(!sessionLogOutModal)}>
                    <AntDesign style={styles.icons} name="logout" size={24} color="black" />
                </Pressable>
            </View>
        </View>
            {favourites[0] ? (
                <FlatList
                ListHeaderComponent={()=><Text style={styles.address}>Favourite products:</Text>}
                style={styles.favourites}
                data={ [...favourites] }
                keyExtractor={ (key) => Math.random() }
                renderItem={ ( { item } ) =>  ( <ItemFavourite item={ item } /> )  }
            />
            ) : (
                <View style={styles.favourites}>
                    <View style={styles.emptyContainer}>
                        <Text style={styles.text}>No hay productos favoritos</Text>
                    </View>
                </View>
                )
            }
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
        width: "80%",
        alignSelf: 'center',
        maxHeight: 150
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalIconContainer:{
        flexDirection: 'row'
    },
    modalIcon: {
        margin: 25
    }
})

export default Profile
