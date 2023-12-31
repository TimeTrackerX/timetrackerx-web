import { useToast } from '@app/modules/BootstrapToasts/useToast.tsx';
import useAuthStore from '@app/stores/UseAuthStore.ts';
import { useGoogleLogin, TokenResponse, UseGoogleLoginOptionsAuthCodeFlow, CodeResponse } from '@react-oauth/google';
import { Auth } from '@timetrackerx/js-sdk';
import { FC } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

type SuccessResponse = Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>;
type ErrorResponse = Pick<TokenResponse, 'error' | 'error_description' | 'error_uri'>;
const GoogleAuthLogIn: FC = () => {
    const toast = useToast();
    const updateAuth = useAuthStore(s => s.updateAuth);
    const handleSuccess = async ({ code }: SuccessResponse) => {
        const sdk = new Auth({
            baseUrl: 'http://localhost:4000',
        });
        const { auth, error } = await sdk.authenticateWithGoogleCode(code);
        if (error) {
            toast({
                type: 'danger',
                title: 'Auth Error',
                message: error.message,
            });
        }
        if (auth) {
            updateAuth(auth);
            toast({
                type: 'success',
                title: 'Auth Success',
                message: `Welcome back ${auth.user.name}`,
            });
        }
    };

    const handleError = ({ error }: ErrorResponse) => {
        toast({
            type: 'danger',
            title: 'Auth Error',
            message: `Unable to log you in due to "${error || 'Unknown'}"`,
        });
    };

    const loginOptions: UseGoogleLoginOptionsAuthCodeFlow = {
        onSuccess: handleSuccess,
        onError: handleError,
        flow: 'auth-code',
        redirect_uri: 'postmessage',
        scope: String(import.meta.env.VITE_GOOGLE_SCOPES)
            .split(',')
            .join(' '),
    };
    const login = useGoogleLogin(loginOptions);
    return <GoogleLoginButton size="32px" iconSize="32px" style={{ width: 230 }} onClick={login} />;
};

export default GoogleAuthLogIn;
