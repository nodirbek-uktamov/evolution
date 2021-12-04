import React, { Fragment } from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Ionicons'
import { useLoad } from '../hooks/request'
import { ACADEMY_DETAIL } from '../urls'
import Loader from '../components/common/Loader'
import CoursesTab from '../components/CoursesTab'

export default function AcademyDetail({ route }) {
    const { item: academy } = route.params
    const detail = useLoad({ url: ACADEMY_DETAIL.replace('{id}', academy.id) })
    console.log(academy)
    const detailInfo = detail.response?.data?.attributes || {}
    const courses = detailInfo?.courses?.data || []
    const telegram = academy.attributes.telegram.replace('@', '')

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <StatusBar />

            {detail.loading ? <Loader color="white" size={50} style={{ marginTop: 80 }} /> : (
                <View>
                    <Image source={{ uri: academy.attributes.image }} style={{ width: '100%', height: 200 }} />

                    <Image
                        source={{ uri: academy.attributes.logo }}
                        style={{ width: 70, height: 70, position: 'absolute', top: 140, left: 20, backgroundColor: 'white', borderRadius: 20 }} />
                </View>
            )}

            <View style={{ padding: 15, marginTop: 10 }}>
                <Text style={styles.name}>{academy.attributes.name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Icon size={30} color="#4a80f0" name="location" />
                    <Text style={{ color: 'white', fontSize: 18 }}>{academy.attributes.adress}</Text>
                </View>

                <Text style={{ ...styles.tabDescription, fontSize: 16 }}>
                    {academy.attributes.description}
                </Text>

                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
                        onPress={() => Linking.openURL(`tel:${academy.attributes.phone}`)}>
                        <Icon size={30} color="#34a853" name="call" style={{ width: 45 }} />
                        <Text style={{ color: '#209cee', fontSize: 17 }}>{academy.attributes.phone}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
                        onPress={() => Linking.openURL(`https://t.me/${telegram}`)}>
                        <Icon size={30} color="#0182c2" name="send" style={{ width: 45 }} />
                        <Text style={{ color: '#209cee', fontSize: 17 }}>@{telegram}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.academy}>
                    {courses.map((item, index) => (
                        <View style={{ marginBottom: 20, width: '50%', alignItems: 'center' }} key={item.id}>
                            <CoursesTab index={index} item={item} />
                        </View>
                    ))}
                </View>
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
    academy: {
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})
