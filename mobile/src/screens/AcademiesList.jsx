import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'
import AcademiesTab from '../components/AcademiesTab'
import { ACADEMIES_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import Header from '../components/Header'
import Loader from '../components/common/Loader'

export default function AcademiesList() {
    const academies = useLoad({ url: ACADEMIES_LIST })

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <Header />

            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="light" />
                    <Text style={styles.title}>Все академии</Text>
                    <View style={styles.line} />
                </View>

                {academies.loading ? <Loader size={50} style={{ marginTop: 80 }} color="#fff" /> : null}

                <View style={styles.academy}>
                    {academies.response ? academies.response.data.map((item, index) => (
                        <View key={item.id} style={{ marginBottom: 20 }}><AcademiesTab academy style={{ width: '85%', height: 160 }} index={index} item={item} /></View>
                    )) : null}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    academy: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
    },
    line: {
        width: 100,
        height: 2,
        backgroundColor: '#4a80f0',
        borderRadius: 10,
        marginTop: 12,
    },
})
