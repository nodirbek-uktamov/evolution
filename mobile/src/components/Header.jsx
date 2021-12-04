import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'
import avatar from '../../assets/ava.jpeg'

export default function Header() {
    const [text, onChangeText] = useState('')

    return (
        <View style={styles.header}>
            <View style={{ width: 50 }}><Image style={styles.ava} source={avatar} /></View>
            <TextInput placeholderTextColor="grey" placeholder="Поиск..." style={styles.search} onChangeText={onChangeText} value={text} />
            <View style={{ width: 50, alignItems: 'flex-end' }}><Icon size={24} color="#FFF" name="notifications" /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#121421',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 60,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    ava: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    search: {
        flex: 1,
        borderRadius: 40,
        color: 'white',
        fontSize: 15,
        paddingHorizontal: 15,
        height: 35,
        backgroundColor: '#1b214d',
    },
})
