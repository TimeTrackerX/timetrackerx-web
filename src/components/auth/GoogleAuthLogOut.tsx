import { useToast } from '@app/modules/BootstrapToasts/useToast.tsx';
import useAuthStore from '@app/stores/UseAuthStore.ts';
import { FC } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

const GoogleAuthLogOut: FC = () => {
    const toast = useToast();
    const removeAuth = useAuthStore(s => s.removeAuth);

    const handleLogOut = () => {
        removeAuth();
        toast({
            type: 'success',
            title: 'Auth Success',
            message: `You have logged out`,
        });
    };
    return (
        <GoogleLoginButton size="32px" iconSize="32px" style={{ width: 135 }} onClick={handleLogOut} text="Log Out" />
    );
};

export default GoogleAuthLogOut;
