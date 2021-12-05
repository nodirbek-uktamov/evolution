import * as React from 'react'
import { Formik } from 'formik'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { usePostRequest } from '../hooks/request'
import { MEETUPS_LIST, ORDERS_LIST } from '../urls'

export default function OrderForm({ onSuccess }) {
    const orderCreate = usePostRequest({ url: ORDERS_LIST })

    async function onSubmit(data) {
        const { success } = await orderCreate.request({ data: { data } })

        if (success) {
            onSuccess()
        }
    }

    return (
        <Formik
            initialValues={{ telegram: '' }}
            onSubmit={onSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 14, color: '#209cee' }}>Создать заказ</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Название заказа</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.email} />

                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Описание заказа </Text>

                    <TextInput
                        multiline
                        style={{ ...styles.input, height: 100 }}
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.email} />

                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Бюджет (В Сумах)</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('price')}
                        onBlur={handleBlur('price')}
                        value={values.email} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Телеграм для связи</Text>

                            <TextInput
                                style={{ ...styles.input }}
                                onChangeText={handleChange('telegram')}
                                onBlur={handleBlur('telegram')}
                                placeholder="@username"
                                placeholderTextColor="#96c5f3"
                                value={values.email} />
                        </View>

                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Описание для митапа</Text>

                            <TextInput
                                placeholderTextColor="#96c5f3"
                                placeholder="+998901112233"
                                style={styles.input}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.email} />
                        </View>
                    </View>

                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.link}>Создать...</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    link: {
        marginTop: 8,
        color: '#209cee',
        fontWeight: '500',
    },
    input: {
        borderWidth: 2,
        borderColor: '#209cee',
        color: 'white',
        borderRadius: 12,
        fontSize: 18,
        padding: 15,
        marginBottom: 15,
        marginTop: 7,
        paddingVertical: 10,
        paddingTop: 10,
    },
    container: {
        padding: 16,
        paddingBottom: 20,
    },
})
