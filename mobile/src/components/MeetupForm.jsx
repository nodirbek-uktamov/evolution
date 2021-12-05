import * as React from 'react'
import { Formik } from 'formik'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { usePostRequest } from '../hooks/request'
import { MEETUPS_LIST } from '../urls'

export default function MeetupForm({ region, meetupsRequest, setShown }) {
    const { latitude, longitude } = region
    const meetup = usePostRequest()
    return (
        <Formik
            initialValues={
                {
                    logo: '',
                    name: '',
                    description: '',
                    phone: '',
                    telegram: '',
                    latitude,
                    longitude,
                }
            }
            onSubmit={async (values) => {
                const { success, response, error } = await meetup.request({ url: MEETUPS_LIST, data: { data: { ...values } } })
                if (success) {
                    meetupsRequest()
                    setShown(false)
                }
                if (error) {
                    setShown(false)
                }
                console.log(JSON.stringify(response, null, 4))
            }}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 14 }}>Meetup</Text>

                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Ссылка на фото</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('logo')}
                        onBlur={handleBlur('logo')}
                        value={values.email}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Название для митапа</Text>
                            <TextInput
                                style={{ ...styles.input }}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.email}
                            />
                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Описание для митапа</Text>
                            <TextInput
                                style={{ ...styles.input }}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.email}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Ваш номер телефона</Text>
                            <TextInput
                                style={{ ...styles.input }}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.email}
                            />
                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#209cee' }}>Ваш телеграм ник</Text>
                            <TextInput
                                style={{ ...styles.input }}
                                onChangeText={handleChange('telegram')}
                                onBlur={handleBlur('telegram')}
                                value={values.email}
                            />
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
        borderRadius: 12,
        fontSize: 18,
        padding: 8,
        marginVertical: 8,
        paddingVertical: 4,
    },
    container: {
        padding: 16,
        paddingBottom: 20,
    },
})
