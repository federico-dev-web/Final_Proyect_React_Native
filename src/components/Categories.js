import { FlatList, StyleSheet } from 'react-native'
import { categories } from "../data/categories.js";
import ItemCategory from './ItemCategory';


const Categories = ({navigation}) => {
    return (
        <FlatList 
            data={ categories }
            keyExtractor={ (key) => key }
            renderItem={ ( { item } ) =>  ( <ItemCategory category={ item } navigation={navigation} /> )  }
        />
    )
}
const styles = StyleSheet.create({
    list:{

    }
})

export default Categories