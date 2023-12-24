import 'bootstrap/dist/css/bootstrap.min.css';
import '@app/index.css';
import { router } from '@app/config/routes.tsx';
import { BootstrapToastsContainer } from '@app/modules/BootstrapToasts/bootstrapToastsContainer.tsx';
import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

const App: FC = () => (
    <React.StrictMode>
        <BootstrapToastsContainer>
            <RouterProvider
                router={router}
                future={{
                    v7_startTransition: true,
                }}
            />
        </BootstrapToastsContainer>
    </React.StrictMode>
);
export default App;
