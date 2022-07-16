import { Container, SideBar, Content, Footer } from './styles';
import { Slider} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import logoIF from '../../assets/img/if.png';

export const Welcome: React.FC = () => {

    return (
        <Container>
            <SideBar>
                <img className='logoIF' alt="" src={logoIF} />
                <div className="contentTemp">
                    <div className="buttonTempAleta">
                        <h1>Temperatura Aleta</h1>
                        <Slider max={50} />
                    </div>
                    <div className="buttonTempAmbiente">
                        <h1>Temperatura Ambiente</h1>
                        <Slider defaultValue={20} />
                    </div>
                </div>

            </SideBar>
            <Content>
                <div className="ft">Aletas: Aplicações em materias diversos</div>
                <div className="maps">
                </div>
            </Content>
            <Footer>
                <h1>Todos os direitos reservados - IFSULDEMINAS 2022 - Fenômenos de Transporte</h1>
            </Footer>
        </Container>
    );
};



