import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet } from 'react-native'

export default function Indicator({ active }) {
    const width = useRef(new Animated.Value(5)).current
    const opacity = useRef(new Animated.Value(0.15)).current

    useEffect(() => {
        if (active) {
            startAnimation(width, 16)
            startAnimation(opacity, 1)
            return
        }
        startAnimation(width, 5)
        startAnimation(opacity, 0.15)
    }, [active])

    function startAnimation(target, value, duration = 200) {
        Animated.timing(target, { toValue: value, duration, useNativeDriver: false }).start()
    }

    return <Animated.View style={{ ...styles.indikatorItem, width, opacity }} />
}

const styles = StyleSheet.create({
    indikatorItem: { height: 5, borderRadius: 5, backgroundColor: '#fff', marginHorizontal: 2 },
})
