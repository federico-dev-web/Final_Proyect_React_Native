import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native'
import ItemCategory from './ItemCategory.js';
import { colors } from '../theme/colors.js';

import { useGetCategoriesQuery } from "../services/ecommerceApi.js";

const Categories = ({navigation}) => {

    const {
        data: categories, 
        isLoading, 
        isError, 
        error
    } = useGetCategoriesQuery();
    

    if(isLoading){
        return (
            <View style={styles.indicator}>
                <ActivityIndicator size={100} color={colors.verdeOscuro}  />
            </View>
        )
    }

    return (
        <FlatList 
            data={ categories }
            keyExtractor={ (key) => key }
            renderItem={ ( { item } ) =>  ( <ItemCategory category={ item } navigation={navigation} /> )  }
        />
    )
}
const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        alignContent: 'center',
        marginTop: 250,
        justifyContent: 'center'
    }
})

export default Categories