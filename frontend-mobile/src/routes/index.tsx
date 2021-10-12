import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { Login, Movies } from '../pages';
import { colors, text } from '../styles';
import { isAuthenticated } from '../services/auth';
import { Logout } from '../components';
import MovieDetailts from '../pages/MovieDetails';
         
const Stack = createStackNavigator();

const HeaderText = () => (
    <Text style={text.headerTitle}>MovieFlix</Text>
)

const Routes = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                
                headerStyle: {
                    backgroundColor: colors.primary,
                    height: 68,
                    borderBottomWidth: 0
                },
                headerLeft: ()  => <HeaderText />,
                headerRight: () => <Logout />
            }}

        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Movies" component={Movies} />
            <Stack.Screen name="Movie Details" component={MovieDetailts} />

        </Stack.Navigator>
    )

}

export default Routes;