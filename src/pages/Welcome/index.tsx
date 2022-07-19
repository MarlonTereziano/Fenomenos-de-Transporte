import { Container, SideBar, Content, Footer } from './styles';
import { Slider } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import logoIF from '../../assets/img/if.png';

import { valueSliderAleta } from './aletas';
import { valueSliderAmbiente } from './aletas';


export const Welcome: React.FC = () => {
    

    return (
        <Container>
            <SideBar>
                <img className='logoIF' alt="" src={logoIF} />
                <div className="contentTemp">
                    <div className="buttonTempAleta">
                        
                        <h1>Temperatura Aleta (K)</h1>
                        <Slider min={50} max={100} onChange={(value) => valueSliderAleta(value)} />
                    </div>
                    <div className="buttonTempAmbiente">
                        <h1>Temperatura Ambiente</h1>
                        <Slider defaultValue={20} onChange={(value2) => valueSliderAmbiente(value2)}/>
                    </div>
                </div>

            </SideBar>
            <Content>
                <div className="ft">Aletas: Aplicações em materias diversos</div>
                <div className="aletas">
                    <div className="blocoHorizontal" />
                    <div className="blocoVerticalCobre">
                        <h1>Cobre</h1>
                    </div>
                    <div className="blocoVerticalAco">
                        <h1>Aço</h1>
                    </div>
                    <div className="blocoVerticalFerro">
                        <h1>Ferro</h1>
                    </div>
                </div>
            </Content>
            <Footer>
                <h1>Todos os direitos reservados - IFSULDEMINAS 2022 - Fenômenos de Transporte</h1>
            </Footer>
        </Container>
    );
};



