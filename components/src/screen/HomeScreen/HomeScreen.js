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
import { HelperText, TextInput, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './HomeStyles/HomeStyles'
import defaultInitialState from '../../data/DataDefault'
import Icon from 'react-native-vector-icons/Ionicons';
function HomeScreen({ navigation, route, navigateToDetails, navigateToCategories, data }) {

    
    const ListItem = ({ item }) => {
        const img = item.image;
        return (
            <View style={styles.cardView}>
                <TouchableOpacity onPress={() => { navigateToDetails(item) }} >
                    <View>
                        <Image style={styles.imgDish} source={item.image} />

                        <View style={styles.cardDescription}>
                            <View style={styles.viewDes}>
                                <Icon name="ios-book" color="#ef370d" size={20} /><Text style={{ color: 'black' }}>{item.mode}</Text>
                            </View>

                            <View style={styles.viewDes}>
                                <Icon name="stopwatch-outline" color="#4F8EF7" size={20} /><Text style={{ color: 'black' }}>{item.time}</Text>
                            </View>
                            <View style={styles.viewDes}>
                                <Icon name="ios-star-half-sharp" color="#efe80d" size={19} /><Text style={{ color: 'black' }}>{item.eval}</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView styles={styles.container}>

            <View>
                <View style={styles.content}>
                    <View style={styles.searchContent}>
                        <TextInput
                            style={styles.searchIcon}
                            mode='outlined'
                            label="Search"
                            right={<TextInput.Icon name="search-web" />}
                        />
                    </View>
                    <View style={styles.dataTrend}>
                        <View>
                            <TouchableOpacity onPress={() => { navigateToCategories() }} >
                                <Text style={styles.txtSeeMore}>View All </Text>
                            </TouchableOpacity>

                        </View>
                        <SectionList
                            contentContainerStyle={styles.contentContainerStyle}
                            sections={data}
                            stickySectionHeadersEnabled={false}
                            horizontal={true}
                            renderItem={({ item }) => { return <ListItem item={item} /> }}
                        />
                    </View>

                </View>
            </View>

        </SafeAreaView>
    );

}
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default HomeScreen