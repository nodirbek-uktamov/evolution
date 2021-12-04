import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { ErrorMessage } from 'formik'

export default function ValidationErrorMessage({ name, style, setError, ...attributes }) {
    return (
        <ErrorMessage
            name={name}
            {...attributes}
            render={(msg) => {
                if (typeof setError === 'function') setError(msg)
                if (!name) return <Text />

                return (
                    <Text style={{ ...styles.defaultError, ...style }}>
                        {msg}
                    </Text>
                )
            }} />
    )
}

const styles = StyleSheet.create({
    defaultError: {
        paddingTop: 5,
        color: 'red',
    },
})
