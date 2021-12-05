import React, { Fragment } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Main from './screens/Main'
import Jobs from './screens/Jobs'
import Orders from './screens/Orders'
import AcademiesList from './screens/AcademiesList'
import CoursesList from './screens/CoursesList'
import Header from './components/Header'
import Map from './screens/Map'
import CourseDetail from './screens/CourseDetail'
import AcademyDetail from './screens/AcademyDetail'
import MentorDetail from './screens/MentorDetail'
import Splash from './screens/Splash'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const TopTab = createMaterialTopTabNavigator()

export default function Navigation() {
    console.disableYellowBox = true

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="BottomTabs" component={BottomTabs} />
                <Stack.Screen options={{ headerShown: false }} name="AcademiesList" component={AcademiesList} />
                <Stack.Screen options={{ headerShown: false }} name="CoursesList" component={CoursesList} />
                <Stack.Screen options={{ headerShown: false }} name="CourseDetail" component={CourseDetail} />
                <Stack.Screen options={{ headerShown: false }} name="AcademyDetail" component={AcademyDetail} />
                <Stack.Screen options={{ headerShown: false }} name="MentorDetail" component={MentorDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const color = '#209cee'

function BottomTabs() {
    return (
        <BottomTab.Navigator screenOptions={{
            tabBarStyle: {
                height: 80,
                paddingBottom: 30,
                paddingTop: 10,
                backgroundColor: '#121421',
                borderTopWidth: 0,
            },
        }}>
            <BottomTab.Screen options={{
                headerShown: false,
                title: 'Образование',
                tabBarLabelStyle: { color },
                tabBarIcon: ({ focused }) => <Icon size={30} color={color} name={focused ? 'book' : 'book-outline'} />,
            }} name="Main" component={Main} />

            <BottomTab.Screen options={{
                headerShown: false,
                title: 'Карта',
                tabBarLabelStyle: { color },
                tabBarIcon: ({ focused }) => (
                    <Icon size={30} color={color}
                        name={focused ? 'map' : 'map-outline'} />
                ),
            }} name="Map" component={Map} />

            <BottomTab.Screen options={{
                headerShown: false,
                title: 'Работа',
                tabBarLabelStyle: { color },
                tabBarIcon: ({ focused }) => (
                    <Icon size={30} color={color}
                        name={focused ? 'briefcase' : 'briefcase-outline'} />
                ),
            }} name="Jobs" component={JobTabs} />
        </BottomTab.Navigator>
    )
}

function JobTabs() {
    return (
        <Fragment>
            <Header />

            <TopTab.Navigator tabBarOptions={{ style: { borderBottomWidth: 0 } }} screenOptions={{
                tabBarStyle: { backgroundColor: '#121421' },
                tabBarActiveTintColor: 'white',
                tabBarIndicatorStyle: { backgroundColor: color },
            }}>
                <TopTab.Screen name="Jobs" options={{ title: 'Вакансии' }} component={Jobs} />
                <TopTab.Screen name="Orders" options={{ title: 'Заказы' }} component={Orders} />
            </TopTab.Navigator>
        </Fragment>
    )
}

const styles = StyleSheet.create({})
