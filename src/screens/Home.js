import { SafeAreaView, View, ActivityIndicator, StyleSheet, FlatList, Text } from 'react-native'
import Head from '../components/Head.js'
import Categories from '../components/Categories.js'


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Head navigation={navigation} title={"Categorías"} text={"Elija una categoría"} />
            <Categories navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 150
    },
    indicator: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})


export default Home