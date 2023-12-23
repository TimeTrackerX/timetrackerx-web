import Footer from '@app/layout/Footer.tsx';
import NavigationBar from '@app/layout/NavigationBar.tsx';
import { FC, PropsWithChildren } from 'react';
import Container from 'react-bootstrap/Container';
// import { Outlet } from 'react-router-dom';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Container>{children}</Container>
            <Footer />
        </>
    );
};

export default RootLayout;
