import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { choiceLinear } from '../utils/colors'

export default function AcademiesTab({ item, style, index }) {
    return (
        <LinearGradient colors={choiceLinear(index, true)} style={[styles.tab, style]}>
            <Text style={styles.tabName}>{item.attributes.name}</Text>
            <Text numberOfLines={3} style={styles.tabDescription}>{item.attributes.description}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    tab: {
        width: 305,
        borderRadius: 26,
        padding: 24,
        marginHorizontal: 5,
        justifyContent: 'space-between',
    },
    tabName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    tabDescription: {
        color: '#efefef',
        marginTop: 2,
        fontSize: 18,
    },
    tabPrice: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
    },
})
