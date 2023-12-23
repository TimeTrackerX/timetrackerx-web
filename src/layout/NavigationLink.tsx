import { FC, PropsWithChildren } from 'react';
// import { NavLink, To } from 'react-router-dom';

type Props = {
    to: unknown;
    // to: To;
};
const NavLink: FC<PropsWithChildren<Props & { className: string }>> = () => null;
const NavigationLink: FC<PropsWithChildren<Props>> = ({ to, children }) => {
    return (
        <NavLink to={to} className="nav-link">
            {children}
        </NavLink>
    );
};

export default NavigationLink;
