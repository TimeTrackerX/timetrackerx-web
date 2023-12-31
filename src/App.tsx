import 'bootstrap/dist/css/bootstrap.min.css';
import '@app/index.css';
import { router } from '@app/config/routes.tsx';
import { BootstrapToastsContainer } from '@app/modules/BootstrapToasts/bootstrapToastsContainer.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

const App: FC = () => (
    <React.StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <BootstrapToastsContainer>
                <RouterProvider
                    router={router}
                    future={{
                        v7_startTransition: true,
                    }}
                />
            </BootstrapToastsContainer>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
export default App;
