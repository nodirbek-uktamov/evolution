import React, { useRef, useState } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Platform } from 'react-native'
import { Field } from 'formik'
import ValidationErrorMessage from './ValidationErrorMessage'

export default function Input({
    label,
    name,
    validate,
    left,
    right,
    style,
    keyboard,
    placeholder,
    text,
    maxLength,
    autoCapitalize,
    wrapperStyle,
    labelStyle,
    editable,
    masked,
    multiline = false,
    placeholderTextColor,
    inputStyle,
    height = 90,
    secureTextEntry,
    ...attributes
}) {
    let textInput = useRef(null)

    const inputWrapperStyle = [
        styles.wrapper, style,
        multiline && height ? { height } : null,
        multiline ? styles.multiline : {},
    ]

    return (
        <View style={{ ...wrapperStyle }}>
            {label ? <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text> : null}
            <Field name={name} validate={validate}>
                {({ field, form }) => (
                    <TouchableOpacity
                        onPress={() => setTimeout(() => { textInput.focus() }, 50)}
                        style={inputWrapperStyle}>
                        {left ? <View style={styles.leftBlock}>{left}</View> : null}

                        <TextInput
                            ref={(ref) => { textInput = ref }}
                            style={{ ...styles.inputStyle, ...text }}
                            onChangeText={(value) => form.setFieldValue(name, value)}
                            value={String(name ? field.value || '' : '')}
                            keyboardType={keyboard}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            autoCapitalize={autoCapitalize}
                            editable={editable}
                            multiline={multiline}
                            placeholderTextColor={placeholderTextColor}
                            {...attributes} />

                        {right ? <View style={styles.rightBlock}>{right}</View> : null}
                    </TouchableOpacity>
                )}
            </Field>

            <ValidationErrorMessage name={name} />
        </View>
    )
}

export const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
        letterSpacing: 0.5,
        fontWeight: 'bold',
    },
    wrapper: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d8ddde',
    },
    leftBlock: {
        marginRight: 20,
    },
    inputStyle: {
        width: '100%',
        fontSize: 17,
        color: 'black',
        textAlignVertical: 'top',
    },
    multiline: {
        alignItems: 'flex-start',
        paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    },
    error: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
    },
    switcherPassword: {
        zIndex: 1000,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
    },
})
