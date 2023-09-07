import { StyleSheet, View, TextInput, Pressable } from 'react-native'
import { colors } from "../theme/colors.js";
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

const Search = ( { setFilter } ) => {
    
    const [text, setText] = useState("")

    

    const clearSearch = () => { 
        setText("")
        setFilter("")
    }

    const doSearch = (value) => { 
        setText(value)
        setFilter(value)
    }


    return (
    <View style={styles.container}>
        <TextInput value={text} onChangeText={ (text) => doSearch(text) } style={styles.input} placeholder='Busca tu producto favorito...'/>
        <Pressable>
            <AntDesign onPress={ () => clearSearch() } name="close" style={styles.icon} size={24} color={colors.verdeOscuro} />
        </Pressable>
        <Pressable>
            <AntDesign onPress={ () => {} } name="search1" style={styles.icon} size={24} color={colors.verdeOscuro} />
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    input: {
        color: colors.verdeOscuro,
        padding: 10,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: colors.verdeOscuro,
        width: '60%',
        backgroundColor: colors.blanco,
        alignContent: 'center',
        justifyContent: 'center'
    },
    icon: {
        marginHorizontal: 6
    }
})

export default Search