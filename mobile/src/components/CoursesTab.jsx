import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { choiceLinear } from '../utils/colors'

export default function CoursesTab({ item, style, index = 0, detail = false }) {
    return (
        <LinearGradient colors={choiceLinear(index)} style={[styles.tab, style]}>
            <Text style={{ ...styles.tabName, fontSize: detail ? 22 : 18 }}>{item.attributes.name}</Text>

            {detail ? (
                <Text numberOfLines={4} style={{ ...styles.tabDescription, fontSize: detail ? 16 : 14 }}>
                    {item.attributes.description}
                </Text>
            ) : null}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    tab: {
        minHeight: 150,
        borderRadius: 26,
        width: '90%',
        padding: 18,
        marginHorizontal: 5,
        paddingBottom: 10,
    },
    tabName: {
        color: 'white',
        fontWeight: 'bold',
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
