import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'
import { useLoad } from '../hooks/request'
import CoursesTab from '../components/CoursesTab'
import { COURSES_LIST } from '../urls'
import Header from '../components/Header'
import Loader from '../components/common/Loader'

export default function AcademiesList() {
    const courses = useLoad({ url: COURSES_LIST })

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <Header />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar style="light" />
                    <Text style={styles.title}>Все курсы</Text>
                    <View style={styles.line} />
                </View>

                {courses.loading ? <Loader size={50} style={{ marginTop: 80 }} color="#fff" /> : null}

                <View style={[styles.course, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }]}>
                    {courses.response ? courses.response.data.map((item, index) => (
                        <View style={{ marginBottom: 20 }} key={item.id}><CoursesTab index={index} item={item} /></View>
                    )) : null}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    course: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
    },
    line: {
        width: 100,
        height: 2,
        backgroundColor: '#4a80f0',
        borderRadius: 10,
        marginTop: 12,
    },
})
