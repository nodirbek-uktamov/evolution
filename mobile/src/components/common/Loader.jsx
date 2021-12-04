import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function Loader({
    size = 'large',
    color = 'black',
    animating = true,
    hidesWhenStopped = true,
    center = false,
    style,
}) {
    const Indicator = <ActivityIndicator style={style} size={size} color={color} animating={animating} hidesWhenStopped={hidesWhenStopped} />
    if (center) return <View style={styles.center}>{Indicator}</View>
    return Indicator
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
