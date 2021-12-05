import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import OrderItem from '../components/OrderItem'
import { ORDERS_LIST } from '../urls'
import { useLoad } from '../hooks/request'

export default function Orders() {
    const orders = useLoad({ url: ORDERS_LIST })
    const ordersList = orders.response?.data || []

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {ordersList.map((item) => <OrderItem item={item.attributes} key={item.id} />)}
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
