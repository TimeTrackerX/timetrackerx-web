import {
    Action,
    BootstrapToast,
    BootstrapToastParams,
    BootstrapToastsContext,
    State,
} from '@app/modules/BootstrapToasts/context.tsx';
import { reducer } from '@app/modules/BootstrapToasts/reducer.tsx';
import uniqueId from 'lodash/fp/uniqueId';
import { FC, PropsWithChildren, Reducer, useReducer } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const initialState: State = {
    toasts: [],
};
export const BootstrapToastsContainer: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

    const createToast = ({ title, message, type }: BootstrapToastParams) => {
        const toast: BootstrapToast = {
            id: uniqueId('toast-'),
            title,
            message,
            type,
            created: new Date(),
        };

        dispatch({
            type: 'ADD_TOAST',
            toast,
        });
    };
    return (
        <BootstrapToastsContext.Provider value={createToast}>
            {children}
            <ToastContainer position="top-center">
                {state.toasts.map(({ id, title, message, type }) => (
                    <Toast
                        className="m-1"
                        key={id}
                        bg={type}
                        animation
                        show
                        autohide
                        delay={5000}
                        onClose={() => dispatch({ type: 'REMOVE_TOAST', id })}
                    >
                        <Toast.Header closeButton>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">{title}</strong>
                            <small className="text-muted">just now</small>
                        </Toast.Header>
                        <Toast.Body className={type === 'dark' ? 'text-white' : undefined}>{message}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
        </BootstrapToastsContext.Provider>
    );
};
