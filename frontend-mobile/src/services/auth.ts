
import AsyncStorage from "@react-native-async-storage/async-storage";
import queryString, { Stringifiable } from "query-string";

import { AuthProps } from '../@types';
import { api, TOKEN } from './index';

type response = {
    data :{
        access_token: string;
    }
}

export async function login(userInfo: AuthProps){
    const data = queryString.stringify({
        ...userInfo,
        grant_type: "password"
    });

    const result: response = await api.post('oauth/token', data, {
        headers: {
            Authorization: TOKEN,
            "Content-Type": "application/x-www-form-urlencoded",
        }
    });

    const { access_token } = result.data;

    setAsyncKeys("@token", access_token);

    return result;
}

async function setAsyncKeys(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.warn(error);
    }
}

export async function isAuthenticated() {
    try {
        const token = await AsyncStorage.getItem('@token');
        return token ? true : false;
    } catch (error) {
        console.warn(error);
    }
}

export async function logout() {
    try {
        AsyncStorage.removeItem("@token");
    } catch (error) {
        console.warn(error)
    }
}