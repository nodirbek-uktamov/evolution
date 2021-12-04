import React from 'react'
import { StyleSheet, View, Image, SafeAreaView, Text, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function CourseDetail({ route }) {
    const { course } = route.params
    const academy = course.attributes.academy.data.attributes
    const telegram = academy.telegram.replace('@', '')

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <SafeAreaView />

            <View>
                <Image source={{ uri: course.attributes.image }} style={{ width: '100%', height: 200 }} />

                <Image
                    source={{ uri: academy.logo }}
                    style={{ width: 70, height: 70, position: 'absolute', top: 140, left: 20, backgroundColor: 'white', borderRadius: 20 }} />
            </View>

            <View style={{ padding: 15, marginTop: 10 }}>
                <Text style={styles.name}>{course.attributes.name}</Text>

                <Text style={{ ...styles.tabDescription, fontSize: 16 }}>
                    {course.attributes.description}
                </Text>

                {course.attributes.offline ? (
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
                            onPress={() => Linking.openURL(`tel:${academy.phone}`)}>
                            <Icon size={30} color="#34a853" name="call" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>{academy.phone}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
                            onPress={() => Linking.openURL(`https://t.me/${telegram}`)}>
                            <Icon size={30} color="#0182c2" name="send" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>@{telegram}</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={{ paddingVertical: 20 }} onPress={() => Linking.openURL(course.attributes.courseUrl)}>
                        <Text style={{ color: '#209cee', fontSize: 17.5, fontWeight: '600' }}>Открыть курс...</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
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
        fontSize: 12,
    },
})
