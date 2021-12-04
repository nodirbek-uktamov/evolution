import React, { useState, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { defaultStyles } from '../static/styles'
import BottomModal from './common/BottomModal'

export default function OrderItem({ index }) {
    const [isModalOpened, setIsModalOpened] = useState(false)

    function Content() {
        return (
            <Fragment>
                <Text style={styles.jobName}>React App</Text>
                <Text style={{ flex: 0, fontSize: 15, color: '#209cee', marginBottom: 8 }}>10 000 $</Text>

                <Text style={{ marginBottom: 10, fontSize: 15, color: '#fff' }}>
                    Lorem Ipsum sit dolor333
                    Lorem Ipsum sit dolor333
                    Lorem Ipsum sit dolor333
                    Lorem Ipsum sit dolor333
                    Lorem Ipsum sit dolor333
                </Text>
            </Fragment>
        )
    }

    return (
        <View>
            {isModalOpened ? (
                <BottomModal visible={isModalOpened} onDismiss={() => setIsModalOpened(false)}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Content />

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} onPress={() => Linking.openURL('tel:+998901112233')}>
                            <Icon size={30} color="#34a853" name="call" style={{ width: 45 }} />
                            <Text style={{ color: '#3173dc', fontSize: 17 }}>+998901112233</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} onPress={() => Linking.openURL('https://t.me/unde_fined')}>
                            <Icon size={30} color="#0182c2" name="send" style={{ width: 45 }} />
                            <Text style={{ color: '#3173dc', fontSize: 17 }}>@unde_fined</Text>
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
