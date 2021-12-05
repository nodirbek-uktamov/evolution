import React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Ionicons'

export default function MentorDetail({ route }) {
    const { item } = route.params

    console.log(item)

    return (
        <ScrollView style={{ backgroundColor: '#121421', flex: 1 }}>
            <StatusBar />

            <View>
                <Image source={{ uri: item.bgImage }} style={{ width: '100%', height: 200 }} />
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>

            <View style={{ padding: 15, marginTop: 10 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={{ ...styles.tabDescription, color: '#209cee' }}>{item.profession}</Text>
                <Text style={styles.tabDescription}>{item.info}</Text>

                <Text style={{ color: '#fff', fontSize: 18, marginTop: 15 }}>Связаться с ним:</Text>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
                    onPress={() => Linking.openURL(`https://t.me/${item.telegram}`)}>
                    <Icon size={30} color="#0182c2" name="send" style={{ width: 45 }} />
                    <Text style={{ color: '#209cee', fontSize: 17 }}>@{item.telegram}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
                    onPress={() => Linking.openURL(item.linkedin)}>
                    <Icon size={30} color="#209cee" name="logo-linkedin" style={{ width: 45 }} />
                    <Text style={{ color: '#209cee', fontSize: 17 }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 5,
    },
    tabDescription: {
        color: '#fff',
        marginTop: 10,
        fontSize: 17,
    },
    image: {
        width: 70,
        height: 70,
        position: 'absolute',
        top: 140,
        left: 20,
        backgroundColor: 'white',
        borderRadius: 20,
    },
})
