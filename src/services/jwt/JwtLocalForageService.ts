import JwtServiceInterface from '@app/services/jwt/JwtServiceInterface.ts';
import * as localforage from 'localforage';

const JWT_KEY = 'jwt_token';
export default class JwtLocalForageService implements JwtServiceInterface {
    get() {
        return localforage.getItem<string>(JWT_KEY);
    }

    async set(token: string) {
        await localforage.setItem(JWT_KEY, token);
    }

    async delete() {
        await localforage.removeItem(JWT_KEY);
    }
}
