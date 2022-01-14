import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    SectionList,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Alert,
    Dimensions,
    Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultInitialState from '../../data/DataDefault'
import HomeScreen from './HomeScreen'
export default function HomeContainer({navigation, route, props}) {
    const [search, setTextSearch] = useState('');

    const [data, setData] = useState([]);

    useEffect(() => {
        getStorageValue()
        // console.log('first load data')
    }, [])
    useEffect(() => {
        data && console.log('dataLoad', data);
    }, [data])
 
    async function getStorageValue() {
        try {
            const item = await AsyncStorage.getItem('@data');
            const value = item ? JSON.parse(item) : defaultInitialState;
            setData(value);
        } catch (e) {
            console.log('cant get value : ' + e)
        }
    }
    const navigateToDetails = item => {
        console.log(item)
        navigation.navigate('Detail', { screen: 'Detail', data: item })
    }
    const navigateToCategories = () => {

        navigation.navigate('Category', { screen: 'Category', data: data })
    }



    const homeProps = {
        navigateToDetails,
        navigateToCategories,
        data,
        props,
    };
    return <HomeScreen {...homeProps} />;
}