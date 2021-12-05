import React, { useState, Fragment } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { defaultStyles, colors } from '../static/styles'
import BottomModal from './common/BottomModal'

export default function JobItem({ item }) {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const tags = item.tags.split(' ')

    function Content() {
        return (
            <Fragment>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                }}>
                    <Image style={styles.itemImage} source={{ uri: item.companyLogo }} />

                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}>
                        <Text style={styles.companyName}>{item.companyName}</Text>
                        <Text style={styles.jobName}>{item.name}</Text>

                        <Text style={{ flex: 0, fontSize: 15, color: '#209cee', marginBottom: 5 }}>от 10 000 $</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, color: 'white' }} numberOfLines={5}>
                        {item.description}
                    </Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {tags.map((tag, index) => (
                            <View style={{ ...styles.tagContainer, backgroundColor: colors[index] }}>
                                <Text style={styles.tag}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </Fragment>
        )
    }

    return (
        <TouchableOpacity onPress={() => setIsModalOpened(true)} style={styles.itemContainer}>
            {isModalOpened ? (
                <BottomModal stick onDismiss={() => setIsModalOpened(false)} style={{ backgroundColor: '#1b214d' }}>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <Content />

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }} onPress={() => Linking.openURL(`mailto:${item.mail}`)}>
                            <Icon size={30} color="#dc4f44" name="mail" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>{item.mail}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }} onPress={() => Linking.openURL(`https://t.me/${item.telegram}`)}>
                            <Icon size={30} color="#0182c2" name="paper-plane" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>@{item.telegram}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 20 }} />
                </BottomModal>
            ) : null}

            <Content />
        </TouchableOpacity>
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
    },
    companyName: {
        fontSize: 15,
        fontWeight: '500',
        color: '#C0C0C0',
    },
    jobName: {
        fontSize: 19,
        color: 'white',
        fontWeight: '600',
        paddingVertical: 5,
    },
    tag: {
        color: 'white',
        fontSize: 15,
    },
    tagContainer: {
        marginTop: 10,
        borderRadius: 7,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 10,
        minWidth: 30,
        alignItems: 'center',
    },
})
