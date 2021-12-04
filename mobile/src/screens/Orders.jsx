import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import OrderItem from '../components/OrderItem'

export default function Jobs() {
    const jobs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {jobs.map((item) => <OrderItem key={item.id} />)}
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121421',
    },
})
