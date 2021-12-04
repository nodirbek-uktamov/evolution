import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import JobItem from '../components/JobItem'

export default function Jobs() {
    const jobs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{ marginBottom: 20 }}>
                    {jobs.map((item) => <JobItem key={item.id} />)}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})