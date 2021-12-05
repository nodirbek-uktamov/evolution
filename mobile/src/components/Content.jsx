import React, { useState } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Content({ item, width, margin }) {
    const { categories } = item
    const [selectedCategories, setSelectedCategories] = useState([])

    function onPress(id) {
        if (selectedCategories.includes(id)) {
            setSelectedCategories(selectedCategories.filter((i) => i !== id))
        } else {
            setSelectedCategories([...selectedCategories, id])
        }
    }

    return (
        <View style={{ width, marginHorizontal: margin, alignItems: 'center' }}>
            <Image
                source={item.image}
                style={{ width: 100, height: 100, marginHorizontal: (width - 100) / 2 }}
                fadeDuration={400}
                resizeMethod="resize"
                resizeMode="contain" />

            <Text style={styles.title}>{item.title}</Text>

            {item.logo ? <View style={styles.logo}>{item.logo}</View> : null}

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {categories ? categories.map((tab) => (
                    <TouchableOpacity
                        activeOpacity={0.3}
                        key={tab.id}
                        style={selectedCategories.includes(tab.id) ? styles.tabActive : styles.tab}
                        onPress={() => onPress(tab.id)}>
                        <Text style={styles.tabText}>{tab.attributes.name}</Text>
                    </TouchableOpacity>
                )) : null}
            </View>

            <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: '#fff',
        marginTop: 24,
        fontWeight: '500',
        lineHeight: 32,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        color: '#efefef',
        marginTop: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    tab: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        backgroundColor: '#1C2031',
        borderRadius: 12,
        marginHorizontal: 6,
        marginTop: 10,
    },
    tabActive: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        backgroundColor: '#4A80F0',
        borderRadius: 12,
        marginHorizontal: 6,
        marginTop: 10,
    },
    tabText: {
        fontSize: 17,
        color: 'white',
    },
})
