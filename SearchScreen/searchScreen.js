import SearchBar from "../Utils/SearchBar";
import {View,Text,StyleSheet} from 'react-native';
import React, {useState} from 'react';
const SearchScreen = () =>{
    const [term,setTerm] = useState('');
    return(
        <View>
            <SearchBar term={term} onTermChange={newTerm=>setTerm(newTerm)}/>
            <Text>{term}</Text>
        </View>
    )
}

export default SearchScreen;