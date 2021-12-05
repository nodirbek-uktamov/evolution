import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import Indicator from '../components/Indicator'
import Content from '../components/Content'
import kiteImage from '../assets/kite.png'
import lupImage from '../assets/lup.png'
import rocketImage from '../assets/rocket.png'
import calendarImage from '../assets/calendar.png'
import speakerImage from '../assets/speaker.png'
import logo from '../assets/logo.png'
import { Logo, Next } from '../components/common/Svgs'
import { useLoad } from '../hooks/request'
import { CATEGORIES_LIST } from '../urls'

const { width, height } = Dimensions.get('window')

export default function Splash() {
    const scrollRef = useRef()

    const { navigate } = useNavigation()
    const [screen, setScreen] = useState(0)
    const categories = useLoad({ url: CATEGORIES_LIST })

    const blockWidth = (width / 100) * 90
    const marginWidth = (width / 100) * 5

    const data = [
        {
            id: 0,
            title: 'Добро пожаловать в',
            logo: <Text style={{ color: '#209cee', fontSize: 40, fontWeight: 'bold' }}>Evolution</Text>,
            image: kiteImage,
        },
        {
            id: 1,
            title: 'Узнайте своё текущее состояние по 8 сферам',
            subTitle: 'Пройдите в течение 10-15 минут авторскую диагностику Growy Me и получите рекомендации по улучшению',
            image: lupImage,
        },
        {
            id: 2,
            title: 'Уверенно развивайтесь и продвигайтесь вперёд',
            subTitle: 'Используйте развивающие материалы Growy Me и уникальный инструмент Автокоучинг, который помогает увеличить ясность, мотивацию и осознанность в достижении целей.',
            image: rocketImage,
        },
        {
            id: 3,
            title: 'Вдохновляйтесь промежуточными успехами',
            subTitle: 'Дорожная карта по достижению цели поможет вам видеть ваш прогресс — сколько вы уже прошли и сколько осталось до конца пути',
            image: calendarImage,
        },
        {
            id: 4,
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
                        <Content key={item.id} width={blockWidth} margin={marginWidth} item={item} />
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
                    {screen !== 4 ? (
                        <TouchableOpacity style={styles.button} onPress={handleNext} activeOpacity={0.7}>
                            <Next />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.blueButton}
                            activeOpacity={0.7}
                            onPress={() => navigate('BottomTabs')}>
                            <Text style={styles.buttonText}>Приступить</Text>
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
    buttonText: { color: 'white', fontSize: 18 },
})
