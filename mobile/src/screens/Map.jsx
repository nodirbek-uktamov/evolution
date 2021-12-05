import * as React from 'react'
import MapView, {Callout, CalloutSubview, Marker} from 'react-native-maps'
import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, Linking, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useEffect, useRef, useState } from 'react'
import { useDimensions } from 'react-native-modalize/lib/utils/use-dimensions'
import { MEETUPS_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import BottomModal from '../components/common/BottomModal'
import MeetupForm from "../components/MeetupForm";

const logo = 'https://cdn.logo.com/hotlink-ok/logo-social.png'

export default function Map() {
    const [region, setRegion] = useState(false)
    const [shown, setShown] = useState(false)
    const [userLocation, setLocation] = useState()
    const mapRef = useRef(null)
    const { width, height } = useDimensions()
    const meetups = useLoad({ url: MEETUPS_LIST })

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                showsUserLocation
                showsMyLocationButton
                style={styles.map}
                onUserLocationChange={(e) => setLocation(e.nativeEvent.coordinate)}
                initialRegion={userLocation || {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={(reg) => {
                    setRegion(reg)
                    console.log(region)
                }}>
                    <Icon
                        size={40}
                        color="red"
                        style={{ position: 'absolute', top: (height / 2) - 20, left: (width / 2) - 20 }}
                        name="pin" />
                <TouchableOpacity
                // style={{ backgroundColor: 'red', position: 'absolute', top: (height / 2) + 16, }}
                    onPress={() => {
                        mapRef.current.animateToRegion(userLocation)
                    }}>
                    <Icon
                        size={40}
                        color="#1b214d"
                        style={{ position: 'absolute', top: (height / 2) + 16, left: 19 }}
                        name="locate-outline" />
                    <Icon
                        size={40}
                        color="#1b214d"
                        style={{ position: 'absolute', top: (height / 2) + 16, left: 20 }}
                        name="add" />
                    <Text
                        style={{ position: 'absolute', top: (height / 2) + 29, left: 64, fontWeight: 'bold' }}>Показать мое место
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ backgroundColor: 'red' }}
                    onPress={() => {
                        setShown(!shown)
                    }}>
                    <Icon
                        size={40}
                        color="#1b214d"
                        style={{ position: 'absolute', top: (height / 2) + 60, left: 21 }}
                        name="add-circle" />
                    <Text
                        style={{ position: 'absolute', top: (height / 2) + 73, left: 64, fontWeight: 'bold' }}>Создать митап
                    </Text>
                </TouchableOpacity>

                {meetups.response?.data.map((meetup) => (
                    <Marker
                        coordinate={{ latitude: meetup.attributes.latitude, longitude: meetup.attributes.longitude }}>
                        <Icon size={30} color="#1b214d"
                            name="school" />

                        <Callout tooltip>
                            <View style={styles.eventInfo}>
                                <Image
                                    style={{ width: 40, height: 40, marginBottom: 8, borderRadius: 4 }}
                                    source={{ uri: meetup.attributes.logo ? meetup.attributes.logo : logo}} />
                                <Text style={styles.title}>{meetup.attributes.name}</Text>
                                <Text>{meetup.attributes.description}</Text>

                                <CalloutSubview
                                    style={{ paddingVertical: 6 }}
                                    onPress={() => Linking.openURL(`tel:${meetup.attributes.phone}`)}>
                                    <Text style={styles.link}>Позвонить организатору</Text>
                                </CalloutSubview>

                                <CalloutSubview
                                    style={{ paddingVertical: 6 }}
                                    onPress={() => Linking.openURL(`https://t.me/${meetup.attributes.telegram}`)}>
                                    <Text style={styles.link}>Написать в телеграм</Text>
                                </CalloutSubview>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>

            <ScrollView style={{ backgroundColor: '#121421' }} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                {meetups.response?.data.map((meetup) => (

                    <View style={{ ...styles.infoTab, width, alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ ...styles.tab, width: width * 0.9 }}
                            onPress={() => {
                                mapRef.current.animateToRegion({ latitude: meetup.attributes.latitude, longitude: meetup.attributes.longitude })
                            }}>
                            <Image
                                style={{ width: 40, height: 40, marginBottom: 8, borderRadius: 8, backgroundColor: 'white' }}
                                source={{ uri: meetup.attributes.logo ? meetup.attributes.logo : logo}} />
                            <Text style={{ ...styles.title, color: 'white' }}>{meetup.attributes.name}</Text>
                            <Text style={{ color: 'white' }} numberOfLines={2}>{meetup.attributes.description}</Text>
                            <Text style={styles.link}>Посмотреть Место...</Text>

                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <BottomModal onDismiss={setShown} visible={shown}>
                <MeetupForm setShown={setShown} meetupsRequest={meetups.request} region={region}/>
            </BottomModal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.65,
    },
    eventInfo: {
        minWidth: 280,
        maxWidth: 350,
        padding: 18,
        borderRadius: 12,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    infoTab: {
        marginTop: 12,
        backgroundColor: '#121421',
        height: 100,
    },
    tab: {
        flexGrow: 12,
        backgroundColor: '#1b214d',
        padding: 20,
        borderRadius: 24,
    },
    link: {
        marginTop: 8,
        color: '#209cee',
        fontWeight: '500',
    },
})
