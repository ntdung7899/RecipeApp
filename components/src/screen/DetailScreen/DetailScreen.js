import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Alert,
    ScrollView
} from 'react-native';

import styles from './styles/DetailStyle'
import Icon from 'react-native-vector-icons/Ionicons';
function DetailsScreen({ dataEarn,ingredients, FormatIngredient }) {
    
    return (
        <SafeAreaView style={styles.container}>
            {
                dataEarn &&
                <View>
                    <View>
                        <Image style={styles.imgDish} source={dataEarn.image} />
                        <View>
                            <View style={styles.cardDescription}>
                                <View style={styles.viewDes}>
                                    <Icon name="ios-book" color="#ef370d" size={20} /><Text style={{ color: 'black' }}>{dataEarn.mode}</Text>
                                </View>

                                <View style={styles.viewDes}>
                                    <Icon name="stopwatch-outline" color="#4F8EF7" size={20} /><Text style={{ color: 'black' }}>{dataEarn.time}</Text>
                                </View>
                                <View style={styles.viewDes}>
                                    <Icon name="ios-star-half-sharp" color="#efe80d" size={19} /><Text style={{ color: 'black' }}>{dataEarn.eval}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ScrollView>
                            <View style={styles.BotContent}>
                                <Text style={{ color: 'black', fontSize: 25, marginBottom: 10 }}>Ingredients</Text>
                                {
                                    ingredients && ingredients.map((element, i) => {
                                        return (
                                            <View key={i} style={{ flexDirection: 'row' }}>
                                                <Text>{'\u2022'}</Text>
                                                <Text style={styles.textContent}>{element}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>

                    </View>
                </View>
            }

        </SafeAreaView>
    );
}


export default DetailsScreen;