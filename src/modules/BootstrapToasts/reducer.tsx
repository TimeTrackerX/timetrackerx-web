import { Action, State } from '@app/modules/BootstrapToasts/context.tsx';
import { Reducer } from 'react';

export const reducer: Reducer<State, Action> = (state, action) => {
    if (action.type === 'ADD_TOAST') {
        return {
            ...state,
            toasts: [...state.toasts, action.toast],
        };
    } else if (action.type === 'REMOVE_TOAST') {
        const updatedToasts = state.toasts.filter(toast => toast.id !== action.id);
        return {
            ...state,
            toasts: updatedToasts,
        };
    } else {
        throw new Error(`Unhandled toast reducer action: ${action}`);
    }
};
