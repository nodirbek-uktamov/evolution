import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { choiceLinear } from '../utils/colors'

export default function AcademiesTab({ item, style, index, reversed, academy = false }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{ width: 305, marginHorizontal: 5 }} onPress={() => navigation.navigate(academy ? 'AcademyDetail' : 'CourseDetail', { item })}>
            <LinearGradient colors={choiceLinear(index, reversed)} style={[styles.tab, style]}>
                <Text style={styles.tabName}>{item.attributes.name}</Text>
                <Text numberOfLines={3} style={styles.tabDescription}>{item.attributes.description}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        width: 305,
        borderRadius: 26,
        padding: 24,
        flex: 1,
    },
    tabName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    tabDescription: {
        color: '#efefef',
        marginTop: 7,
        fontSize: 18,
    },
    tabPrice: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
    },
})
