import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";


import { AuthProps } from "../@types";
import { isAuthenticated, login } from "../services/auth";

import { theme, loginPage, text } from '../styles';

export default function Login() {

    const navigation = useNavigation();
    const [authenticaded, setAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState <AuthProps> (
        {
            username: "",
            password: ""
        }
    );

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    useEffect(() => {
        logged();
        if(authenticaded){
            navigation.navigate("Movies");    
        }
    },[logged]);


    async function handleLogin() {
        const data = await login(userInfo);
        navigation.navigate("Movies");
    }
    
    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <View style={loginPage.form}>
                    <Text style={text.loginTitle}>LOGIN</Text>
                    <View style={loginPage.inputContainer}>
                        <TextInput style={theme.textInput}
                            placeholder="Email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            value={userInfo.username}
                            onChangeText={
                                (e) => {
                                     setUserInfo({...userInfo, "username": e});   
                                }
                            }
                        />
                        <TextInput style={theme.textInput}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            value={userInfo.password}
                            onChangeText={
                                (e) => {
                                     setUserInfo({...userInfo, "password": e});   
                                }
                            }
                        />
                    </View>
                    <TouchableOpacity 
                        style={loginPage.loginButton} 
                        activeOpacity={0.8}
                        onPress={ () => handleLogin()}
                    >
                        <Text style={text.loginButtonTitle}>FAZER LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

