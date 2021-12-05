import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import OrderItem from '../components/OrderItem'
import { ORDERS_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import OrderForm from '../components/OrderForm'
import BottomModal from '../components/common/BottomModal'

export default function Orders() {
    const orders = useLoad({ url: ORDERS_LIST })
    const ordersList = orders.response?.data || []
    const [shown, setShown] = useState(false)

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <TouchableOpacity onPress={() => setShown(true)} style={{ marginLeft: 25, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Icon size={30} color="#209cee" name="add" />
                <Text style={{ color: '#209cee', fontSize: 20 }}>Создать</Text>
            </TouchableOpacity>

            {shown ? (
                <BottomModal style={{ backgroundColor: '#121421' }} onDismiss={() => setShown(false)} visible={shown}>
                    <OrderForm onSuccess={() => {
                        setShown(false)
                        orders.request()
                    }} />
                </BottomModal>
            ) : null}
            qz
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
