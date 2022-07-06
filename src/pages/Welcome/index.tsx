import { Container, SideBar, Content } from './styles';
import { Input } from 'antd';
import React from 'react';

export const Welcome: React.FC = () => {
    return (
        <Container>
            <SideBar>
                <Input placeholder="Tempo" />
                <br />
                <Input placeholder="Velocidade" />
                <br />
                <Input placeholder="Direção" />
                <br />
                <Input placeholder="Sentido" />
                <br />
            </SideBar>
            <Content>
                <div className="ft">Fenômenos de Transporte</div>
                <div className="maps"></div>
            </Content>
        </Container>
    );
};



