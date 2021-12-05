import React, { useRef, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import Indicator from '../components/Indicator'
import Content from '../components/Content'
import kiteImage from '../assets/kite.png'
import lupImage from '../assets/lup.png'
import rocketImage from '../assets/rocket.png'
import calendarImage from '../assets/calendar.png'
import speakerImage from '../assets/speaker.png'
import { Next } from '../components/common/Svgs'
import { useLoad } from '../hooks/request'
import { CATEGORIES_LIST } from '../urls'

const { width, height } = Dimensions.get('window')

export default function Splash() {
    const scrollRef = useRef()
    const [selectedCategories, setSelectedCategories] = useState([])

    const { navigate } = useNavigation()
    const [screen, setScreen] = useState(0)
    const categories = useLoad({ url: CATEGORIES_LIST })

    const blockWidth = (width / 100) * 90
    const marginWidth = (width / 100) * 5

    const data = [
        {
            id: 0,
            title: 'Добро пожаловать в',
            logo: <Text style={{ color: '#209cee', fontSize: 40, fontWeight: 'bold', marginTop: -7 }}>Evolution</Text>,
            image: kiteImage,
        },
        {
            id: 1,
            title: 'Находи полезные знакомства',
            subTitle: 'Встречаясь на митапах с профессионалами которые можно найти на карте',
            image: lupImage,
        },
        {
            id: 2,
            title: 'Зарабатывай',
            subTitle: 'Выполняя заказы в фаст-дашорде.',
            image: rocketImage,
        },
        {
            id: 3,
            title: 'Прокачивай скиллы',
            subTitle: 'Проходя рекомендованные онлайн и оффлайн курсы по категорим которые выбрали',
            image: calendarImage,
        },
        {
            id: 4,
            title: 'Находи работу',
            subTitle: 'С помощью вакансий от реальных компаний',
            image: rocketImage,
        },
        {
            id: 5,
            title: 'Что тебе интересно?',
            image: speakerImage,
            categories: categories.response?.data,
        },
    ]

    function handleNext() {
        if (screen < 5) setScreen(screen + 1)

        scrollRef.current?.scrollTo({ x: (screen + 1) * width, animated: true })
    }

    function onScroll({ nativeEvent }) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== screen) setScreen(slide)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View /><View />

            <View>
                <ScrollView
                    horizontal
                    ref={scrollRef}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={300}>
                    {data.map((item) => (
                        <Content setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories} key={item.id} width={blockWidth} margin={marginWidth} item={item} />
                    ))}
                </ScrollView>
            </View>

            <View>
                <View style={styles.pagination}>
                    {data.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={1}
                            onPress={() => scrollRef.current?.scrollTo({ x: item.id * width, animated: true })}>
                            <Indicator active={item.id === screen} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.pagination}>
                    {screen !== 5 ? (
                        <TouchableOpacity style={styles.button} onPress={handleNext} activeOpacity={0.7}>
                            <Next />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.blueButton}
                            activeOpacity={0.7}
                            onPress={() => navigate('BottomTabs')}>
                            <Text style={styles.buttonText}>{selectedCategories.length === 0 ? 'Пропустить' : 'Приступить'}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View /><View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { width, height, backgroundColor: '#121421', justifyContent: 'space-between', marginVertical: 0 },
    pagination: { flexDirection: 'row', justifyContent: 'center', marginHorizontal: 16 },
    button: {
        width: 120,
        backgroundColor: '#EEEEEE',
        borderRadius: 60,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    blueButton: {
        width: '100%',
        backgroundColor: '#209cee',
        borderRadius: 10,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    buttonText: { color: 'white', fontSize: 18, fontWeight: '600' },
})
