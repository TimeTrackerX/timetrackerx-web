import { create } from 'zustand';

export interface AuthUser {
    id: number;
    avatar?: string;
    username: string;
}

type AuthState = {
    user: AuthUser | null;
    isLoggedIn: boolean;
    updateUser: (authUser: AuthUser) => void;
    removeUser: () => void;
};

const useAuthStore = create<AuthState>(set => ({
    user: null,
    isLoggedIn: false,
    updateUser: (authUser: AuthUser) => set({ user: authUser, isLoggedIn: authUser !== null }),
    removeUser: () => set({ user: null, isLoggedIn: false }),
}));

export default useAuthStore;
