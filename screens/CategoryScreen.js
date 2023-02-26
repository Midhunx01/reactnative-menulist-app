import { FlatList } from "react-native";
import  CategoryGridTile  from "../components/CategoryGridTile";

import { CATEGORIES }  from '../data/dummy-data';


function renderCategoryItems(itemData) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    )
}


export default function CategoryScreen() {
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItems} >

        </FlatList>

    )

}