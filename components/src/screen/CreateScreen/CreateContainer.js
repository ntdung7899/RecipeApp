import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Modal,

} from 'react-native';
import { TextInput, RadioButton, HelperText } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import styles from './styles/CreateStyles'
import Images from '../../Image/image'
import CreateScreen from './CreateScreen'
function CreateContainer({ route, navigation, props }) {
    const defaultFood = {
        id: 0,
        name: '',
        image: '',
        type: 'soup',
        ingredients: '',
        steps: '',
        mode: '',
        time: '',
        eval: '',
    }
    const [newFoods, setFoods] = useState({
        id: 0,
        name: '',
        image: '',
        type: 'soup',
        ingredients: '',
        steps: '',
        mode: '',
        time: '',
        eval: '',
    });
    const [selectedFood, setSelectedFood] = useState();
    const [checked, setChecked] = useState('easy');

    const [nameErrorMessage, setNameErrorMessage] = useState(null)
    const [timeErrorMessage, setTimeErrorMessage] = useState(null)
    const [evalErrorMessage, setEvalErrorMessage] = useState(null)
    const [ingErrorMessage, setIngErrorMessage] = useState(null)

    const CheckFoodName = (text) => {

        validateFoodName(text)
        setFoods({ id: newFoods.id, name: text, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: newFoods.eval })
    }
    const CheckTimeFood = (text) => {

        validateTimeName(text)
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: text, eval: newFoods.eval })
    }
    const CheckEvalFood = (text) => {

        validateEvalName(text)
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: text })
    }
    const CheckIngFood = (text) => {

        validateIngFood(text)
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: text, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: newFoods.eval })
    }
    const validateFoodName = (text) => {
        return text.length < 1 ? setNameErrorMessage('Please enter food name') : setNameErrorMessage(null)
    }
    const validateTimeName = (text) => {
        return isNaN(text) || text.length < 1 ? setTimeErrorMessage('Please enter a number ') : setTimeErrorMessage(null)
    }
    const validateEvalName = (text) => {
        return isNaN(text) || text.length < 1 ? setEvalErrorMessage('Please enter a number ') : setEvalErrorMessage(null)
    }
    const validateIngFood = (text) => {
        return text.length < 1 ? setIngErrorMessage('Please enter ingredients ') : setIngErrorMessage(null)
    }
    const CreateNewFood = () => {
        if (newFoods.name.length < 1) {
            setNameErrorMessage('Please enter name')
        }
        if (newFoods.time.length < 1) setTimeErrorMessage('Please enter time')
        if (newFoods.eval.length < 1) setEvalErrorMessage('Please enter eval')
        if (newFoods.ingredients.length < 1) setIngErrorMessage('Please enter ingredients')
        else {
            if (newFoods.name.length < 1 || newFoods.time.length < 1 || newFoods.eval.length < 1 || newFoods.ingredients.length < 1) return;
            console.log('ok')
        }
    }
    const CreateProps = {
        CreateNewFood,
        CheckIngFood,
        CheckEvalFood,
        CheckTimeFood,
        CheckFoodName,
        newFoods,
        props,
        nameErrorMessage,
        timeErrorMessage,
        evalErrorMessage,
        ingErrorMessage,
        defaultFood
    }
    return <CreateScreen {...CreateProps} />

}


export default CreateContainer;