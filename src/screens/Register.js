import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native"
import { useState } from "react"

import { colors } from "../theme/colors.js";

import { firebase_auth } from "../firebase/firebase_auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
        const response = await createUserWithEmailAndPassword( firebase_auth, email, password)
        navigation.navigate("login")
        } catch (err) {
        console.log(err)
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
            <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("login")}>
            <Text style={styles.registroText}>Regresar al inicio de sesión</Text>
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

export default Register