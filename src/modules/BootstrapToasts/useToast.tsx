import { BootstrapToastsContext, ContextValue } from '@app/modules/BootstrapToasts/context.tsx';
import { useContext } from 'react';

export const useToast = () => useContext<ContextValue>(BootstrapToastsContext);
