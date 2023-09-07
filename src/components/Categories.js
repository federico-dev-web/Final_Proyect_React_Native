import { FlatList, StyleSheet } from 'react-native'
import { colors } from "../theme/colors";
import { categories } from "../data/categories.js";
import ItemCategory from './ItemCategory';
import { useState } from 'react';

const Categories = (setCategoryFilter) => {

    const [categorySelection, setCategorySelection] = useState("")

    return (
        <FlatList 
            data={ categories }
            keyExtractor={ (key) => key }
            renderItem={ ( { item } ) =>  ( <ItemCategory setCategoryFilter={setCategoryFilter} category={ item } /> )  }
        />
    )
}


const styles = StyleSheet.create({

})

export default Categories