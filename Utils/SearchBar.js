import React from "react";
import {View, Text, TextInput} from 'react-native';
import { StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SearchBar = ({term,onTermChange,onTermSubmit}) =>{
    return(
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            style={styles.textPadding} 
            placeholder="Search Bar" 
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={onTermSubmit}
            value={term}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        marginHorizontal:15,
        fontSize:35,
        alignSelf:'center'
    },
    textPadding:{
        flex:1,
    },
    background:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:15,
        flexDirection:'row',
        marginHorizontal:25
    }
})

export default SearchBar;