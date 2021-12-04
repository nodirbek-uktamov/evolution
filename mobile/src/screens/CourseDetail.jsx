import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { Video } from 'expo-av'
import { COURSE_DETAIL } from '../urls'
import { useLoad } from '../hooks/request'
import Loader from '../components/common/Loader'
import { BACKEND_URL } from '../constants'

export default function CourseDetail({ route }) {
    const { item: course } = route.params
    const detailInfo = useLoad({ url: COURSE_DETAIL.replace('{id}', course.id) })
    const navigation = useNavigation()

    const academy = detailInfo.response?.data?.attributes?.academy?.data?.attributes || { telegram: '' }
    const telegram = academy.telegram.replace('@', '')
    const academyId = detailInfo.response?.data?.attributes?.academy?.data?.id

    return (
        <ScrollView style={{ backgroundColor: '#121421', flex: 1 }}>
            <StatusBar />

            <View>
                <Image source={{ uri: course.attributes.image }} style={{ width: '100%', height: 200 }} />

                <Image
                    source={{ uri: academy.logo }}
                    style={{ width: 70, height: 70, position: 'absolute', top: 140, left: 20, backgroundColor: 'white', borderRadius: 20 }} />
            </View>

            <View style={{ padding: 15, marginTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('AcademyDetail', { item: { attributes: academy, id: academyId } })}>
                    <Text style={{ ...styles.tabDescription, paddingBottom: 10 }}>{academy.name}</Text>
                </TouchableOpacity>

                <Text style={styles.name}>{course.attributes.name}</Text>

                <Text style={styles.tabDescription}>
                    {course.attributes.description}
                </Text>

                {!detailInfo.loading ? (
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

                        {!course.attributes.offline ? (
                            <Video
                                style={{ width: '100%', height: 200, marginVertical: 20 }}
                                source={{
                                    uri: BACKEND_URL + course.attributes.courseUrl,
                                }}
                                useNativeControls
                                resizeMode="contain"
                                isLooping />
                        ) : null}
                    </View>
                ) : <Loader color="white" size={50} />}
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
        fontSize: 16,
    },
})
