import SearchBar from "../Utils/SearchBar";
import {View,Text,StyleSheet} from 'react-native';
import React, {useState} from 'react';
import yelp from '../Utils/apiYup'
const SearchScreen = () =>{
    const searchApi = async()=>{
        const response = await yelp.get('/applin')
        console.log(response);
        setResults(response);
    }
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);
    return(
        <View>
            <SearchBar onTermSubmit={()=>{console.log('s8ubmitted');searchApi();}} term={term} onTermChange={newTerm=>setTerm(newTerm)}/>
            <View style={styles.screen}>
            <Text>found {results.length} results</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        margin:15,
    }
})

export default SearchScreen;