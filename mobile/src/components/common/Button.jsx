import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Loader from './Loader'

export default function Button({
    onPress,
    color = '#4dba97',
    style,
    loading,
    textStyle,
    title,
    icon,
    activeOpacity,
    wrapStyle,
    disabled,
    little = false,
    outlined = false,
}) {
    const textStyles = {
        ...styles.text,
        fontSize: little ? 14 : 18,
        color: outlined ? color : '#fff',
        marginHorizontal: little ? 10 : 15,
        ...textStyle,
    }

    return (
        <View style={wrapStyle}>
            <TouchableOpacity
                disabled={loading || disabled}
                onPress={onPress}
                activeOpacity={activeOpacity}
                style={{
                    ...styles.button,
                    backgroundColor: outlined ? 'transparent' : color,
                    borderColor: outlined ? color : null,
                    borderWidth: outlined ? 1 : null,
                    height: little ? 35 : 50,
                    ...style,
                }}>
                {loading ? <Loader style={{ padding: 15 }} color="#fff" size="large" /> : (
                    <View style={styles.icon}>
                        {icon ? <View>{icon}</View> : null}

                        <Text style={textStyles}>
                            {title}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
})
