import { Container, SideBar, Content } from './styles';
import React from 'react';

export const Welcome: React.FC = () => {
    return (
        <Container>
            <SideBar>
                <h1>Welcome</h1>
            </SideBar>
            <Content>
                <div className="ft">Fenômenos de Transporte</div>
                <div className="maps"></div>
            </Content>
        </Container>
    );
};



