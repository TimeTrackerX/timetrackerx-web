import JwtService from '@app/services/jwt/JwtService.ts';
import { AuthResponse, AuthUser } from '@timetrackerx/js-sdk';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { StateCreator } from 'zustand/vanilla';

type AuthState = {
    user: AuthUser | null;
    isLoggedIn: boolean;
    updateAuth: (authResponse: AuthResponse) => void;
    removeAuth: () => void;
};

const stateCreator: StateCreator<AuthState> = set => ({
    user: null,
    isLoggedIn: false,
    updateAuth: async ({ user, token }: AuthResponse) => {
        await JwtService.set(token);
        set({ user, isLoggedIn: !!user });
    },
    removeAuth: async () => {
        await JwtService.delete();
        set({ user: null, isLoggedIn: false });
    },
});

const useAuthStore = create(
    persist(stateCreator, {
        name: 'authStoreState',
    }),
);

export default useAuthStore;
