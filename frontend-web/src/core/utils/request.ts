import axios, { Method } from "axios";
import { CLIENT_ID, CLIENT_SECRET, getSessionData } from './auth';
import qs from 'qs';


const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?: object;
}

type LoginData = {
    username: string;
    password: string;
}

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {

    return axios(  {
            method,
            url: `${BASE_URL}${url}`,
            data,
            params,
            headers
        }
    );
    
}

export const makePrivateRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
    const sessionData = getSessionData();

    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }
    
    return makeRequest({ method, url, data, headers, params });
}

export const makeLogin = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const payload = qs.stringify({ ...loginData, grant_type: 'password' });

    return makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });
}