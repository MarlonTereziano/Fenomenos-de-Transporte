import { Container, SideBar, Content, Footer } from './styles';
import { Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import logoIF from '../../assets/img/if.png';
import grafico1 from '../../assets/img/grafico1.png';
import grafico2 from '../../assets/img/grafico2.jpg';

export const Graficos: React.FC = () => {

    return (
        <Container>
            <SideBar>
                <img className='logoIF' alt="" src={logoIF} />
                <Button href="/" className="contentButton"><strong>VOLTAR</strong></Button>
            </SideBar>
            <Content>
                <div className='Grafico1'>
                    <img className='grafico1' alt="" src={grafico1} />
                </div>
                <div className='Grafico2'>
                    <img className='grafico2' alt="" src={grafico2} />
                </div>
            </Content>
            <Footer>
                <h1>Todos os direitos reservados - IFSULDEMINAS 2022 - Fenômenos de Transporte</h1>
            </Footer>
        </Container>
    );
};



