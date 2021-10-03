import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { theme, login, text } from '../styles';

export default function Login() {
    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <View style={login.form}>
                    <Text style={text.loginTitle}>LOGIN</Text>
                    <View style={login.inputContainer}>
                        <TextInput style={theme.textInput}
                            placeholder="Email"
                            autoCapitalize="none"
                        />
                        <TextInput style={theme.textInput}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity style={theme.primaryButton} activeOpacity={0.8}>
                        <Text style={text.loginButtonTitle}>FAZER LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

