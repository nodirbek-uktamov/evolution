import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import JobItem from '../components/JobItem'
import { useLoad } from '../hooks/request'
import { JOBS_LIST } from '../urls'
import Loader from '../components/common/Loader'

export default function Jobs() {
    const jobs = useLoad({ url: JOBS_LIST })

    return (
        <View style={{ backgroundColor: '#121421', flex: 1 }}>
            {jobs.loading ? <Loader size={50} style={{ marginTop: 80 }} color="#fff" /> : null}

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {jobs.response?.data?.map((item) => <JobItem item={item.attributes} key={item.id} />)}
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
