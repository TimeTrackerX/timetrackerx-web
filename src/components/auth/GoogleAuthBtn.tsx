import GoogleAuthLogIn from '@app/components/auth/GoogleAuthLogIn.tsx';
import GoogleAuthLogOut from '@app/components/auth/GoogleAuthLogOut.tsx';
import useAuthStore from '@app/stores/UseAuthStore.ts';
import { FC } from 'react';

const GoogleAuthBtn: FC = () => {
    const isLoggedIn = useAuthStore(s => s.isLoggedIn);

    return isLoggedIn ? <GoogleAuthLogOut /> : <GoogleAuthLogIn />;
};

export default GoogleAuthBtn;
