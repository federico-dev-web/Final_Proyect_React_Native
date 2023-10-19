import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native"
import { useState } from "react"

import { firebase_auth } from "../firebase/firebase_auth.js"
import { signInWithEmailAndPassword } from "firebase/auth"

import { useDispatch } from "react-redux"
import { setIdToken, setUser } from "../redux/slices/authSlice.js"

import { colors } from "../theme/colors.js"

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
        const response = await signInWithEmailAndPassword( firebase_auth, email, password )
        await AsyncStorage.setItem("savedSession", JSON.stringify({
            email: response.user.email,
            idToken: response._tokenResponse.idToken
        }))
        dispatch(setUser(response.user.email))
        dispatch(setIdToken(response._tokenResponse.idToken))
        } catch (err) {
        console.log(err)
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
            placeholder="Ingrese su email..."
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput
            placeholder="Ingrese su contraseña..."
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("register")}>
            <Text style={styles.registroText}>Registrate aquí</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "600"
    },
    input: {
        width: "85%",
        height: 50,
        borderColor: colors.piel,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 17
    },
    button: {
        backgroundColor: colors.piel,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonText: {
        color: colors.blanco,
        fontSize: 20,
        fontWeight: "600"
    },
    registroText: {
        marginTop: 30,
        fontSize: 18,
        color: colors.verdeOscuro
    }
})

export default Login