import React, { useState, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { defaultStyles } from '../static/styles'
import BottomModal from './common/BottomModal'

export default function OrderItem({ item }) {
    const [isModalOpened, setIsModalOpened] = useState(false)

    function Content() {
        return (
            <Fragment>
                <Text style={styles.jobName}>{item.name}</Text>
                <Text style={{ flex: 0, fontSize: 15, color: '#209cee', marginBottom: 8 }}>{item.price} $</Text>

                <Text style={{ marginBottom: 10, fontSize: 15, color: '#fff' }}>
                    {item.description}
                </Text>
            </Fragment>
        )
    }

    return (
        <View>
            {isModalOpened ? (
                <BottomModal stick style={{ backgroundColor: '#1b214d' }} visible={isModalOpened} onDismiss={() => setIsModalOpened(false)}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Content />

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} onPress={() => Linking.openURL(`tel:${item.phone}`)}>
                            <Icon size={30} color="#34a853" name="call" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>{item.phone}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} onPress={() => Linking.openURL(`https://t.me/${item.telegram}`)}>
                            <Icon size={30} color="#0182c2" name="send" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>@{item.telegram}</Text>
                        </TouchableOpacity>
                    </View>
                </BottomModal>
            ) : null}

            <TouchableOpacity onPress={() => setIsModalOpened(true)} style={styles.itemContainer}>
                <Content />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 500,
        marginRight: 20,
    },
    itemContainer: {
        backgroundColor: '#1b214d',
        padding: 25,
        marginHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
        ...defaultStyles.boxShadow,
    },
    companyName: {
        fontSize: 15,
        fontWeight: '500',
    },
    jobName: {
        fontSize: 19,
        color: 'white',
        fontWeight: '600',
        paddingVertical: 5,
    },
    callContainer: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        flex: 0,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
