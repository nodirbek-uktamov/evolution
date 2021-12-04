import React, { Fragment, useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AcademiesTab from '../components/AcademiesTab'
import { useLoad } from '../hooks/request'
import { CATEGORIES_COURSES_LIST, CATEGORIES_LIST, COURSES_LIST } from '../urls'
import CoursesTab from '../components/CoursesTab'
import Loader from '../components/common/Loader'
import Header from '../components/Header'

export default function Main() {
    const [selected, setSelected] = useState(1)
    const navigation = useNavigation()
    const courses = useLoad({ url: COURSES_LIST })
    const categories = useLoad({ url: CATEGORIES_LIST })
    const academies = useLoad({ url: CATEGORIES_COURSES_LIST.replace('{id}', selected) })

    useEffect(() => {
        academies.setResponse(null)
        academies.request()
        // eslint-disable-next-line
    }, [selected])

    return (
        <View style={{ flex: 1, backgroundColor: '#121421' }}>
            <Header />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar style="light" />
                    <Text style={styles.helloUser}>Привет,  Далер!</Text>
                    <View style={styles.line} />
                </View>

                <ScrollView showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    style={styles.categories}
                    horizontal>

                    {categories.response ? categories.response.data.map((tab) => (
                        <TouchableOpacity
                            activeOpacity={0.3}
                            key={tab.id}
                            style={selected === tab.id ? styles.tabActive : styles.tab}
                            onPress={() => setSelected(tab.id)}>
                            <Text style={styles.tabText}>{tab.attributes.name}</Text>
                        </TouchableOpacity>
                    )) : null}
                </ScrollView>

                {academies.loading || courses.loading
                    ? <Loader size={50} style={{ marginTop: 80 }} color="#fff" />
                    : null}

                {academies.response ? (
                    <Fragment>
                        <View style={[styles.recommendedDescription, styles.container]}>
                            <Text style={styles.recommendedText}>Рекомендованные академии 🚀</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('AcademiesList')}>
                                <Text style={styles.seeAll}>Все...</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal style={styles.academy}>
                            {academies.response.data.attributes.courses.data.map((item, index) => (
                                <AcademiesTab index={index} key={item.id} item={item} />
                            ))}
                        </ScrollView>
                    </Fragment>
                ) : null}

                {courses.response ? (
                    <Fragment>
                        <View style={[styles.recommendedDescription, styles.container]}>
                            <Text style={styles.recommendedText}>Рекомендованные курсы 🚀</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('CoursesList')}>
                                <Text style={styles.seeAll}>Все...</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.academy}>
                            {courses.response.data.map((item, index) => (
                                <View style={{ marginBottom: 20, width: '50%', alignItems: 'center' }} key={item.id}>
                                    <CoursesTab index={index} item={item} />
                                </View>
                            ))}
                        </View>
                    </Fragment>
                ) : null}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 21,
    },
    tab: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        backgroundColor: '#1C2031',
        borderRadius: 12,
        marginHorizontal: 6,
    },
    tabActive: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        backgroundColor: '#4A80F0',
        borderRadius: 12,
        marginHorizontal: 6,
    },
    tabText: {
        fontSize: 17,
        color: 'white',
    },
    helloUser: {
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
    },
    recommendedText: {
        color: '#efefef',
        fontSize: 18,
    },
    academy: {
        marginTop: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    line: {
        width: 32,
        height: 2,
        backgroundColor: '#4a80f0',
        borderRadius: 10,
        marginTop: 12,
        marginBottom: 20,
    },
    recommendedDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
    },
    seeAll: {
        color: '#209cee',
        fontSize: 14,
    },
})
