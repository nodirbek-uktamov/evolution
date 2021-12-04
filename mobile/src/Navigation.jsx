import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen options={{ headerShown: false }} name="Auth" component={Auth} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
