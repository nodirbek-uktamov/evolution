import React, { Fragment, useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AcademiesTab from '../components/AcademiesTab'
import { useLoad } from '../hooks/request'
import { ACADEMIES_LIST, CATEGORIES_COURSES_LIST, CATEGORIES_LIST, COURSES_LIST, MENTORS_LIST } from '../urls'
import CoursesTab from '../components/CoursesTab'
import Loader from '../components/common/Loader'
import Header from '../components/Header'

export default function Main() {
    const [selected, setSelected] = useState(1)
    const navigation = useNavigation()
    const courses = useLoad({ url: COURSES_LIST })
    const categories = useLoad({ url: CATEGORIES_LIST })
    const categoryCourses = useLoad({ url: CATEGORIES_COURSES_LIST.replace('{id}', selected) })
    const academies = useLoad({ url: ACADEMIES_LIST })
    const mentors = useLoad({ url: MENTORS_LIST })

    useEffect(() => {
        categoryCourses.setResponse(null)
        categoryCourses.request()
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

                {mentors.response ? (
                    <View style={styles.container}>
                        <Text style={styles.recommendedText}>Менторы</Text>

                        <View style={{ marginBottom: 20, marginTop: 10, flexDirection: 'row' }}>
                            {mentors.response?.data.map((item) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('MentorDetail', { item: item.attributes })}>
                                    <Image source={{ uri: item.attributes.image }}
                                        style={{ width: 70, height: 70, marginRight: 15, borderRadius: 1000 }} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ) : null}

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

                {categoryCourses.loading || courses.loading || mentors.loading ? (
                    <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                        <Loader size={50} color="#fff" />
                    </View>
                ) : null}

                {categoryCourses.response ? (
                    <Fragment>
                        <View style={[styles.recommendedDescription, styles.container]}>
                            <Text style={styles.recommendedText}>Курсы по категориям</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('CoursesList')}>
                                <Text style={styles.seeAll}>Все...</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal style={styles.academy}>
                            {categoryCourses.response?.data?.attributes?.courses?.data.map((item, index) => (
                                <AcademiesTab index={index} key={item.id} item={item} />
                            ))}
                        </ScrollView>
                    </Fragment>
                ) : null}

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
                            {academies.response?.data.map((item, index) => (
                                <AcademiesTab reversed academy index={index} key={item.id} item={item} />
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
        fontSize: 17,
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
