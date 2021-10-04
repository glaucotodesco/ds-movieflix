import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';

import { isAuthenticated, logout } from "../services/auth";
import { text, theme } from "../styles";

const Logout = () => {
    const [authenticaded, setAuthenticated] = useState(false);
    const navigation = useNavigation();

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    useEffect(() => {
        logged();
    },[]);

    function handleLogout(): void {
        logout();
        navigation.navigate("Login");
    }
    

    return(
       authenticaded ? 
            <View>
                <TouchableOpacity 
                    style={theme.logoutButton} 
                    activeOpacity={0.8}
                    onPress={ () => handleLogout()}
   >
                   <Text style={text.logoutButtonTitle}>Sair</Text>
                </TouchableOpacity>
            </View>
       :
            null
    )
}

export default Logout;

