import { createContext } from 'react';
import { Variant } from 'react-bootstrap/types';

export interface BootstrapToastParams {
    type: Variant;
    title: string;
    message: string;
}

export interface BootstrapToast extends BootstrapToastParams {
    id: string;
    created?: Date;
}

export type ContextValue = (params: BootstrapToastParams) => void;

const defaultContextValue: ContextValue = (params: BootstrapToastParams) => console.log(params);

export const BootstrapToastsContext = createContext<ContextValue>(defaultContextValue);

export type State = {
    toasts: BootstrapToast[];
};

export type Action = { type: 'ADD_TOAST'; toast: BootstrapToast } | { type: 'REMOVE_TOAST'; id: string };
