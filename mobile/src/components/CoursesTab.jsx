import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { choiceLinear } from '../utils/colors'

export default function CoursesTab({ item, style, index = 0, detail = false }) {
    const navigation = useNavigation()

    function openDetails() {
        navigation.navigate('CourseDetail', { item })
    }

    return (
        <TouchableOpacity style={[styles.tab, style]} onPress={openDetails}>
            <LinearGradient colors={choiceLinear(index, false, true)} style={{ flex: 1, width: '100%', padding: 18, borderRadius: 26 }}>
                <Text style={{ ...styles.tabName, fontSize: detail ? 22 : 17 }}>{item.attributes.name}</Text>

                {!item.attributes.offline ? (
                    <View style={{ borderColor: '#eee', flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 7, marginTop: 10, borderRadius: 10, alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 14, color: '#01d1b2', fontWeight: 'bold' }}>&#9679;&nbsp;</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>online</Text>
                    </View>
                ) : null}

                {detail ? (
                    <Text numberOfLines={4} style={{ ...styles.tabDescription, fontSize: detail ? 16 : 14 }}>
                        {item.attributes.description}
                    </Text>
                ) : null}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        minHeight: 150,
        width: '90%',
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
