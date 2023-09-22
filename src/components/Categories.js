import { FlatList, StyleSheet } from 'react-native'
import { useSelector } from "react-redux";
import ItemCategory from './ItemCategory';



const Categories = ({navigation}) => {
    const categories = useSelector((state) => state.homeSlice.allCategories);
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