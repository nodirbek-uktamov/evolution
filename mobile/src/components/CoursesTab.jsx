import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { choiceLinear } from '../utils/colors'

export default function CoursesTab({ item, style, index = 0 }) {
    return (
        <LinearGradient colors={choiceLinear(index)} style={{ ...style, ...styles.tab }}>
            <Text style={styles.tabName}>{item.attributes.name}</Text>
            {/* <Text numberOfLines={3} style={styles.tabDescription}>{item.attributes.description}</Text> */}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    tab: {
        height: 150,
        borderRadius: 26,
        width: '90%',
        padding: 18,
        marginHorizontal: 5,
    },
    tabName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    tabDescription: {
        color: '#fff',
        marginTop: 10,
        fontSize: 12,
    },
    tabBottom: {
        marginTop: 10,
    },
})
