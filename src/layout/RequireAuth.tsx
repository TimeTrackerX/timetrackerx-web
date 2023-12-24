import { useToast } from '@app/modules/BootstrapToasts/useToast.tsx';
import useAuthStore from '@app/stores/UseAuthStore.ts';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
    const toast = useToast();
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore(s => s.isLoggedIn);
    const [isPending, setPending] = useState<boolean>(true);

    useEffect(() => {
        if (!isLoggedIn) {
            toast({
                type: 'info',
                title: 'Protected Route',
                message: 'You need to authenticate first',
            });
            navigate('/');
        }
        setPending(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return !isPending && isLoggedIn ? children : <Spinner />;
};

export default RequireAuth;
