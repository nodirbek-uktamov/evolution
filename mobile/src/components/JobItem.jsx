import React, { useState, Fragment } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { defaultStyles, colors } from '../static/styles'
import BottomModal from './common/BottomModal'

export default function JobItem({ index }) {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const tags = [{ id: 1, tag: 'junior' }, { id: 2, tag: 'js' }, { id: 3, tag: 'css' }, { id: 4, tag: 'html' }]

    function Content() {
        return (
            <Fragment>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                }}>
                    <Image style={styles.itemImage}
                        source={{ uri: 'data:image/jpeg;base64,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' }} />

                    <View style={{
                        flex: 0,
                        justifyContent: 'flex-end',
                    }}>
                        <Text style={styles.companyName}>Monday Labs</Text>
                        <Text style={styles.jobName}>Frontend Developer</Text>
                        <Text style={{
                            flex: 0,
                            fontSize: 15,
                            color: '#209cee',
                            marginBottom: 5,
                        }}>от 10 000 $
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style={{
                        marginBottom: 10,
                        fontSize: 15,
                        color: 'white',
                    }}>
                        Lorem Ipsum sit dolor333
                        Lorem Ipsum sit dolor333
                        Lorem Ipsum sit dolor333
                        Lorem Ipsum sit dolor333
                        Lorem Ipsum sit dolor333
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        {tags.map((item, index) => (
                            <View style={{
                                ...styles.tagContainer,
                                backgroundColor: colors[index],
                            }}>
                                <Text style={styles.tag}>{item.tag}</Text>
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
                    <View style={{ paddingVertical: 10, paddingHorizontal: 35 }}>
                        <Content />

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }} onPress={() => Linking.openURL('mailto:testemail@gmail.com')}>
                            <Icon size={30} color="#dc4f44" name="mail" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>testemail@gmail.com</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }} onPress={() => Linking.openURL('https://t.me/unde_fined')}>
                            <Icon size={30} color="#0182c2" name="paper-plane" style={{ width: 45 }} />
                            <Text style={{ color: '#209cee', fontSize: 17 }}>@unde_fined</Text>
                        </TouchableOpacity>
                    </View>
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
        ...defaultStyles.boxShadow,
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
        borderRadius: 7,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 10,
        minWidth: 30,
        alignItems: 'center',
    },
})
